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

const supabase = createClient(SUPABASE_CONFIG.URL, SUPABASE_CONFIG.ANON_KEY);

export const uploadFileToSupabase = async (file: File): Promise<string> => {
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
