import {create} from "zustand";
import { User } from "database"

const initialState: {
  user: User|undefined
  loaded: boolean
  isGuest: boolean
} = {
  user: undefined,
  loaded: false,
  isGuest: true
}

const useUserStore = create((set) => ({
  ...initialState,
  load: (user: User) => set((s: typeof initialState) => ({...s, loaded: true, isGuest: !!user, user }))
}))

export default useUserStore