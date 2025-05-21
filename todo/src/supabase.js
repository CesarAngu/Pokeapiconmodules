import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://eldpfigzbjajufxyiuvf.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImVsZHBmaWd6YmphanVmeHlpdXZmIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDc2ODA1NDQsImV4cCI6MjA2MzI1NjU0NH0.9ECxignAgCJtzVgwDX30o8y5KWdJeCQ3ZdPlrAlX35U';
export const supabase = createClient(supabaseUrl, supabaseKey);