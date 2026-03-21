import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://rvqeobhdexknhflnqbmy.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJ2cWVvYmhkZXhrbmhmbG5xYm15Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzQxMDEzMjQsImV4cCI6MjA4OTY3NzMyNH0.KMJGL0nuPzOW-8oKPhPb3zQcWnCf0336VzQFGj32EJs'

export const supabase = createClient(supabaseUrl, supabaseKey)