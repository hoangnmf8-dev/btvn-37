import { create } from 'zustand'

const useFormStore = create((set) => ({
  info: JSON.parse(localStorage.getItem("info")) || null,
  step: JSON.parse(localStorage.getItem("step")) || null,
  increasePopulation: () => set((state) => ({ bears: state.bears + 1 })),
  removeAllBears: () => set({ bears: 0 }),
}))

export default useFormStore