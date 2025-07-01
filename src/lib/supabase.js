import { createClient } from '@supabase/supabase-js'

// Project configuration
const SUPABASE_URL = 'https://drljfmbiyebooduugeay.supabase.co'
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRybGpmbWJpeWVib29kdXVnZWF5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTEzNTMzODMsImV4cCI6MjA2NjkyOTM4M30.8RvK0Na2CiBGEyY08BzkbzIWJ51TsDYi0TtAm69SH4Q'

// Validate configuration
if (!SUPABASE_URL || !SUPABASE_ANON_KEY) {
  throw new Error('Missing Supabase configuration');
}

export default createClient(SUPABASE_URL, SUPABASE_ANON_KEY, {
  auth: {
    persistSession: true,
    autoRefreshToken: true
  }
})