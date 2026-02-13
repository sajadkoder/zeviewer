import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || 'https://bwinbwgasszkbqgjstpn.supabase.co';
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJ3aW5id2dhc3N6a2JxZ2pzdHBuIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzA5MjE4NzcsImV4cCI6MjA4NjQ5Nzg3N30.sYQRTBIOvwNsiZ-NT0GPRiYd7j2k1oNns2m7PkXO97Q';

export const supabase = createClient(supabaseUrl, supabaseKey);

export interface Review {
  id: number;
  model_id: number;
  model_name: string;
  company: string;
  rating: number;
  reviewer_name: string | null;
  performance_review: string;
  improvement_suggestions: string | null;
  created_at: string;
}

export interface UserModel {
  id: number;
  name: string;
  company: string;
  category: string;
  description: string;
  is_open_source: boolean;
  created_at: string;
}
