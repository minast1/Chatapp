import { FormEvent } from 'react'
import create from 'zustand'
import { supabase } from './supabaseClient';
import createContext from 'zustand/context'



export const { Provider, useStore } = createContext<authContextState>();


export interface authContextState {
    authView: string
    setAuthView: (to: string) => void
    email: string  
    password: string
    error: string
    loading: boolean
    message: string
   
    setEmail: (to: string) => void
    setPassword: (to: string) => void
   // setError: (to: string) => void
    handleSignIn: (event: FormEvent) => void
    handleSignUp: (event: FormEvent) => void
    handlePasswordReset: (event:FormEvent) => void
}



export const createStore = () => create<authContextState>((set,get) => ({
    authView: 'sign_in',
    error: '',
    email: '',
    password: '',
    session: null,
    message: '',
    loading: false,
    setAuthView: (to) => set(state => ({ authView: to })),
   // setError: (to) => set(state => ({ error: to })),
    setEmail: (to) => set(state => ({ email: to.trim() })),
    setPassword: (to) => set(state => ({ password: to.trim() })),
    handleSignIn: async (event) => {
        event.preventDefault()
        set({ error: '' })
        set({ loading: true })
        const email = get().email
        const password = get().password
        const {  error: signInError } = await supabase.auth.signIn({ email, password })
        if (signInError) set({ error: signInError.message })
        set({ loading: false })
        
    },
    handleSignUp: async (event) => {
        event.preventDefault()
        set({ error: '' })
        set({ loading: true })
        const email = get().email
        const password  = get().password
        const { error: signUpError } = await supabase.auth.signUp({ email, password })
        if (signUpError) set({ error: signUpError.message })
        set({ loading: false })
      
    },
    handlePasswordReset: async (event) => {
        event.preventDefault()
        set({ error: '' })
        set({ loading: true })
        const email = get().email
        const { error } = await supabase.auth.api.resetPasswordForEmail(email)
        if (error) set({ error: error.message })
        else set({ message: 'Check your email for the password reset link' })
        set({loading : false})
    }
}))