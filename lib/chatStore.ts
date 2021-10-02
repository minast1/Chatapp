import produce from 'immer';
import create from 'zustand';
import { persist } from "zustand/middleware";


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

export const useStore = create<CurrentChatState>(persist(
    (set, get) => ({
        currentChat: null,
    setCurrentChat: (chat) => set(state => ({ currentChat: chat })),
  
    }), {name : "currentState"}));

