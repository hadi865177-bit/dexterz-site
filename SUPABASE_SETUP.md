# Supabase Setup for CV File Uploads

This guide will help you set up Supabase for handling CV file uploads in your job application system.

## Step 1: Create a Supabase Project

1. Go to [supabase.com](https://supabase.com)
2. Sign up or log in
3. Create a new project
4. Wait for the project to be ready

## Step 2: Get Your Credentials

1. In your Supabase dashboard, go to **Settings** > **API**
2. Copy your **Project URL** and **anon public** key
3. Update `src/config/supabase.ts` with your credentials:

```typescript
export const SUPABASE_CONFIG = {
  URL: "https://your-project-id.supabase.co", // Your Project URL
  ANON_KEY: "your-anon-key-here", // Your anon public key
  BUCKET_NAME: "cv-uploads", // Your bucket name
};
```

## Step 3: Create Storage Bucket

1. In your Supabase dashboard, go to **Storage**
2. Click **Create a new bucket**
3. Name it `cv-uploads` (or whatever you prefer)
4. Make it **public** (so files can be downloaded)
5. Click **Create bucket**

## Step 4: Configure Bucket Policies

1. Go to **Storage** > **Policies**
2. Click on your bucket name
3. Add the following policies:

### For Uploads (INSERT):

```sql
CREATE POLICY "Allow public uploads" ON storage.objects
FOR INSERT WITH CHECK (bucket_id = 'cv-uploads');
```

### For Downloads (SELECT):

```sql
CREATE POLICY "Allow public downloads" ON storage.objects
FOR SELECT USING (bucket_id = 'cv-uploads');
```

## Step 5: Test the Setup

1. Start your development server: `npm run dev`
2. Go to the Careers page
3. Try uploading a CV file
4. Check your Supabase Storage dashboard to see if the file was uploaded
5. Check your email to see if the download link works

## Troubleshooting

### File Upload Fails

- Check your Supabase credentials in `src/config/supabase.ts`
- Ensure your bucket exists and is public
- Check the browser console for error messages

### Email Doesn't Receive Download Link

- Verify your EmailJS configuration
- Check that the `cv_download_url` parameter is being sent correctly
- Update your EmailJS template to include the download link

### File Not Accessible

- Ensure your bucket policies allow public access
- Check that the file URL is correct in the email

## Security Notes

- The anon key is safe to use in the frontend as it has limited permissions
- Files uploaded to the public bucket are accessible to anyone with the URL
- Consider implementing file expiration or access controls if needed
- You may want to add file size limits and type validation

## Environment Variables (Optional)

For better security, you can use environment variables:

1. Create a `.env` file in your project root:

```env
VITE_SUPABASE_URL=https://your-project-id.supabase.co
VITE_SUPABASE_ANON_KEY=your-anon-key-here
VITE_SUPABASE_BUCKET_NAME=cv-uploads
```

2. Update `src/config/supabase.ts`:

```typescript
export const SUPABASE_CONFIG = {
  URL: import.meta.env.VITE_SUPABASE_URL,
  ANON_KEY: import.meta.env.VITE_SUPABASE_ANON_KEY,
  BUCKET_NAME: import.meta.env.VITE_SUPABASE_BUCKET_NAME,
};
```

3. Add `.env` to your `.gitignore` file
