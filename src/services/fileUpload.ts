// import { createClient } from "@supabase/supabase-js";
// import { SUPABASE_CONFIG } from "@/config/supabase";

// // Initialize Supabase client
// const supabase = createClient(SUPABASE_CONFIG.URL, SUPABASE_CONFIG.ANON_KEY);

// export const uploadFileToSupabase = async (file: File): Promise<string> => {
//   // Generate a unique file name
//   const fileName = `${Date.now()}_${file.name}`;

//   console.log({ file });

//   // Upload the file to Supabase Storage
//   const { data, error } = await supabase.storage
//     .from(SUPABASE_CONFIG.BUCKET_NAME)
//     .upload(fileName, file);
//   console.log(data, error);
//   if (error) {
//     console.error("Error uploading file:", error);
//     throw new Error("File upload failed");
//   }

//   // Get the public URL for the uploaded file
//   const { data: urlData } = supabase.storage
//     .from(SUPABASE_CONFIG.BUCKET_NAME)
//     .getPublicUrl(fileName);
//   console.log(urlData);
//   return urlData.publicUrl;
// };

import { createClient } from "@supabase/supabase-js";
import { SUPABASE_CONFIG } from "@/config/supabase";
import { AWS_S3_CONFIG } from "@/config/aws";
import { uploadFileToS3 } from "./s3Upload";

const supabase = createClient(SUPABASE_CONFIG.URL, SUPABASE_CONFIG.ANON_KEY);

/**
 * Upload file to storage (S3 or Supabase based on configuration)
 * @param file - File to upload
 * @param folder - Optional folder path (only used for S3)
 * @returns Promise<string> - Public URL of uploaded file
 */
export const uploadFileToSupabase = async (file: File, folder: string = 'cvs'): Promise<string> => {
  // Use S3 if enabled, otherwise fallback to Supabase
  if (AWS_S3_CONFIG.USE_S3) {
    console.log('Using AWS S3 for file upload');
    return await uploadFileToS3(file, folder);
  }

  // Fallback to Supabase storage
  console.log('Using Supabase for file upload');
  const fileName = `${Date.now()}_${file.name}`;

  console.log("Upload attempt:", {
    file,
    fileName,
    bucket: SUPABASE_CONFIG.BUCKET_NAME,
    anonKey: SUPABASE_CONFIG.ANON_KEY.substring(0, 8) + "...",
  });

  const { data, error } = await supabase.storage
    .from(SUPABASE_CONFIG.BUCKET_NAME)
    .upload(fileName, file, {
      cacheControl: "3600",
      upsert: false,
    });

  if (error) {
    console.error("Upload error:", {
      message: error.message,
    });
    throw new Error(`File upload failed: ${error.message}`);
  }

  console.log("Upload success:", data);

  const { data: urlData } = supabase.storage
    .from(SUPABASE_CONFIG.BUCKET_NAME)
    .getPublicUrl(fileName);

  if (!urlData.publicUrl) {
    throw new Error("Failed to generate public URL");
  }

  console.log("Public URL:", urlData.publicUrl);
  return urlData.publicUrl;
};
