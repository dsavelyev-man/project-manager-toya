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

type useUserStore = {
  load: (user: User) => void
} & typeof initialState

const useUserStore = create<useUserStore>((set) => ({
  ...initialState,
  load: (user) => set((s: typeof initialState) => ({...s, loaded: true, isGuest: !user, user }))
}))

export default useUserStore