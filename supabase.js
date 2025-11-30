// Replace with YOUR Supabase URL + public anon key
const SUPABASE_URL = "https://qkpgnywwzisggfufwxsj.supabase.co";
const SUPABASE_ANON_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFrcGdueXd3emlzZ2dmdWZ3eHNqIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjQyNzM5MTQsImV4cCI6MjA3OTg0OTkxNH0.-VFfjAQOgTAX8UtFVjg0KE2Nr7FYh5a0THIqL4kmqwk";

const supabase = supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
