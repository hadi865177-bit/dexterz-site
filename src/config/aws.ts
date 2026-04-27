export const AWS_CONFIG = {
  region: import.meta.env.VITE_AWS_REGION || 'us-east-2',
  credentials: {
    accessKeyId: import.meta.env.VITE_AWS_ACCESS_KEY_ID || '',
    secretAccessKey: import.meta.env.VITE_AWS_SECRET_ACCESS_KEY || '',
  },
  s3: {
    bucket: import.meta.env.VITE_AWS_S3_BUCKET || 'cvbuckets3.11',
  },
};

export const AWS_S3_CONFIG = {
  USE_S3: true,
  REGION: import.meta.env.VITE_AWS_REGION || 'us-east-2',
  ACCESS_KEY_ID: import.meta.env.VITE_AWS_ACCESS_KEY_ID || '',
  SECRET_ACCESS_KEY: import.meta.env.VITE_AWS_SECRET_ACCESS_KEY || '',
  BUCKET_NAME: import.meta.env.VITE_AWS_S3_BUCKET || 'cvbuckets3.11',
};
