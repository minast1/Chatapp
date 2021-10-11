import produce from 'immer';
import create from 'zustand';
import { persist } from "zustand/middleware";
import { supabase } from './supabaseClient';


export type Chat = {
    id: number
    name: string
    photo?: string
  createdAt: string
}

export type Message = {
  _id: string | number
  text?: string
  createdAt: Date | number | string
    userId: string | number
    chatId: number
  image?: string
  video?: string
  audio?: string
  sent?: boolean
 // received?: boolean
  pending?: boolean
}



type CurrentChatState = {
    currentChat: Chat | null
  setCurrentChat: (chat: Chat) => void
}



type ChatMessagesState = {
  chatMessages: Message[] | []
  updateChatMessages: (messages: Message[]) => void
}

export const useStore = create<CurrentChatState>(persist(
    (set, get) => ({
        currentChat: null,
    setCurrentChat: (chat) => set(state => ({ currentChat: chat })),
  
    }), {name : "currentState"}));


export const useChatMessagesStore = create<ChatMessagesState>((set) => ({
  chatMessages: [],
  updateChatMessages: (messages) => set(state => ({chatMessages : messages}))
  }))
