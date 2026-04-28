import { S3Client, PutObjectCommand, DeleteObjectCommand, GetObjectCommand } from '@aws-sdk/client-s3';
import { getSignedUrl } from '@aws-sdk/s3-request-presigner';
import { AWS_S3_CONFIG } from '@/config/aws';

// Configure AWS S3 Client (v3)
const s3Client = new S3Client({
  region: AWS_S3_CONFIG.REGION,
  credentials: {
    accessKeyId: AWS_S3_CONFIG.ACCESS_KEY_ID,
    secretAccessKey: AWS_S3_CONFIG.SECRET_ACCESS_KEY,
  },
});

/**
 * Upload file to AWS S3 bucket
 * @param file - File to upload
 * @param folder - Optional folder path in S3 bucket (e.g., 'cvs', 'resumes')
 * @param bucketName - Optional custom bucket name (defaults to main CV bucket)
 * @returns Promise with the public URL of the uploaded file
 */
export const uploadFileToS3 = async (
  file: File, 
  folder: string = 'cvs',
  bucketName: string = AWS_S3_CONFIG.BUCKET_NAME
): Promise<string> => {
  try {
    // Generate unique filename with timestamp
    const timestamp = Date.now();
    const sanitizedFileName = file.name.replace(/[^a-zA-Z0-9.-]/g, '_');
    const fileName = `${folder}/${timestamp}_${sanitizedFileName}`;

    // Convert File to ArrayBuffer
    const arrayBuffer = await file.arrayBuffer();
    const buffer = new Uint8Array(arrayBuffer);

    // Upload parameters (removed ACL to avoid CORS issues)
    const command = new PutObjectCommand({
      Bucket: bucketName,
      Key: fileName,
      Body: buffer,
      ContentType: file.type,
      // ACL removed - bucket policy will handle public access
    });

    // Upload file to S3
    await s3Client.send(command);

    // Generate public URL
    const publicUrl = `https://${bucketName}.s3.${AWS_S3_CONFIG.REGION}.amazonaws.com/${fileName}`;

    // Return the public URL
    return publicUrl;
  } catch (error) {
    throw new Error(`Failed to upload file to S3: ${error instanceof Error ? error.message : 'Unknown error'}`);
  }
};

/**
 * Delete file from AWS S3 bucket
 * @param fileUrl - Full URL of the file to delete
 * @returns Promise<boolean> - True if deletion was successful
 */
export const deleteFileFromS3 = async (fileUrl: string): Promise<boolean> => {
  try {
    // Extract the key from the URL
    const url = new URL(fileUrl);
    const key = url.pathname.substring(1); // Remove leading slash
    
    // Extract bucket name from URL
    const bucketName = url.hostname.split('.')[0];

    const command = new DeleteObjectCommand({
      Bucket: bucketName,
      Key: key,
    });

    await s3Client.send(command);
    return true;
  } catch (error) {
    return false;
  }
};

/**
 * Generate a pre-signed URL for temporary access to a private file
 * @param key - S3 object key
 * @param bucketName - Bucket name (defaults to main CV bucket)
 * @param expiresIn - URL expiration time in seconds (default: 3600 = 1 hour)
 * @returns Promise<string> - Pre-signed URL
 */
export const generatePresignedUrl = async (
  key: string, 
  bucketName: string = AWS_S3_CONFIG.BUCKET_NAME,
  expiresIn: number = 3600
): Promise<string> => {
  try {
    const command = new GetObjectCommand({
      Bucket: bucketName,
      Key: key,
    });

    const url = await getSignedUrl(s3Client, command, { expiresIn });
    return url;
  } catch (error) {
    throw new Error('Failed to generate download link');
  }
};
