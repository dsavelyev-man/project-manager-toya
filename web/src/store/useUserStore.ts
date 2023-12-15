import { create } from "zustand";
import { User } from "shared";

const initialState: {
  user: User | undefined;
  loaded: boolean;
  isGuest: boolean;
} = {
  user: undefined,
  loaded: false,
  isGuest: true,
};

export type UseUserStore = {
  load: (user: User) => void;
  set: (key: keyof User, value: string) => void;
} & typeof initialState;

const useUserStore = create<UseUserStore>((set) => ({
  ...initialState,
  load: (user) =>
    set((s: typeof initialState) => ({
      ...s,
      loaded: true,
      isGuest: !user,
      user,
    })),
  set: (key, value) =>
    set((s) => ({ ...s, user: { ...s.user, [key]: value } })),
}));

export default useUserStore;
