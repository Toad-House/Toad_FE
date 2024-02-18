import create from 'zustand'

export const useStore = create((set) => ({
  mode: 'seller',
  points: 500,
  userData: {
    nickname: 'junns',
    id: '',
  },
  setMode: (mode) => {
    set((state) => ({ ...state, mode: mode }))
  },
  setPoints: (point) => {
    set((state) => ({ ...state, points: point }))
  },
  setUserData: (user) => {
    set((state) => ({ ...state, userData: { ...state.userData, ...user } }))
  },
}))
