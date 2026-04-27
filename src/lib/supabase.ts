import { createClient } from '@supabase/supabase-js';
import { SUPABASE_CONFIG } from '@/config/supabase';

export const supabase = createClient(
  SUPABASE_CONFIG.URL,
  SUPABASE_CONFIG.ANON_KEY
);

// Types for database tables
export interface Blog {
  id: string;
  title: string;
  author: string;
  publish_date: string;
  read_time: string;
  category: string;
  image: string;
  excerpt: string;
  tags: string[];
  content?: string;
  created_at?: string;
  updated_at?: string;
}

export interface Career {
  id: string;
  title: string;
  department: string;
  location: string;
  type: string;
  experience: string;
  description: string;
  responsibilities: string[];
  requirements: string[];
  benefits: string[];
  salary_range?: string;
  is_active: boolean;
  created_at?: string;
  updated_at?: string;
}

export interface JobApplication {
  id: string;
  name: string;
  email: string;
  job_position: string;
  cv_url: string;
  cv_filename: string;
  cv_size?: string;
  status: 'pending' | 'reviewed' | 'shortlisted' | 'rejected';
  created_at?: string;
  updated_at?: string;
}
