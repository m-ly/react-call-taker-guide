import { createClient } from "@supabase/supabase-js";
const supabaseUrl = "https://gdejgrufdqdrzbwtgyxc.supabase.co";

//default is anon key
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImdkZWpncnVmZHFkcnpid3RneXhjIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTIxMDQ1NDksImV4cCI6MjAyNzY4MDU0OX0.4yenvKNFKuBDiLr7C7jFJMUjMTF1FPoLRYXmoqGZ6r8";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
