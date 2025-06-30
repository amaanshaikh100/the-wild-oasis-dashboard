import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://ilijfubkbxkhrupjkymx.supabase.co";

const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImlsaWpmdWJrYnhraHJ1cGpreW14Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTEzMTA2MzIsImV4cCI6MjA2Njg4NjYzMn0.W3BBoDfpBk0qQXiNCMUbHMbDB295B8glbNuYi6xxCqU";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
