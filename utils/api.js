import 'react-native-url-polyfill/auto'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = "https://latpupaleyjyseygxayc.supabase.co"
const supabaseAnonKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImxhdHB1cGFsZXlqeXNleWd4YXljIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTU4OTEwNTIsImV4cCI6MjAxMTQ2NzA1Mn0.8KaB2JlMLU8ebsrN7-zKrAO2Bjh7kNvZl9JyjbfKla0"

export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
  auth: {
    storage: AsyncStorage,
    autoRefreshToken: true,
    persistSession: true,
    detectSessionInUrl: false,
  },
})