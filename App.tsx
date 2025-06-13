import 'react-native-url-polyfill/auto'
import { useState, useEffect } from 'react'
import { supabase } from './supabase/supabase'
import Auth from './componments/Auth'
import { View, Text } from 'react-native'
import { Session } from '@supabase/supabase-js'

export default function App() {
  const [session, setSession] = useState<Session | null>(null)

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }:{data:{session:Session|null}}) => {
      setSession(session)
    })

    supabase.auth.onAuthStateChange((_event:string, session:Session|null) => {
      setSession(session)
    })
  }, [])

  return (
    <View>
      <Auth />
      {session && session.user && <Text>{session.user.id}</Text>}
    </View>
  )
}