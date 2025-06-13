import { createClient } from '@supabase/supabase-js'
import {SUPABASE_URL,SUPABASE_AONO_KEY} from '../constants/constants'

export const supabase = createClient(SUPABASE_URL, SUPABASE_AONO_KEY, {
  auth: {
    persistSession: true,
    autoRefreshToken: false,
    detectSessionInUrl: true,
  },
})
