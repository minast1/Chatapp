import create from 'zustand'
import { AuthSession } from '@supabase/supabase-js'



interface sessionState {
    Usession: AuthSession | null
     setSession: (session:AuthSession | null)=> void
}

export const useStore =  create<sessionState>((set, get) => ({
    Usession: null,
     setSession: (user) => set(state => ({Usession: user})),
}))