import { create } from 'zustand'

const useFormStore = create((set) => ({
  info: JSON.parse(localStorage.getItem("info")) || {},
  step: JSON.parse(localStorage.getItem("step")) || 1,
  username: JSON.parse(localStorage.getItem("username")) || "",
  async: JSON.parse(localStorage.getItem("async")) || false,
  setInfo: (data) => {
    localStorage.setItem("info", JSON.stringify(data));
    set({
      info: data
    })
  },
  setStep: (step) => {
    localStorage.setItem("step", JSON.stringify(step));
    set({
      step
    })
  },
  setUsername: (username) => {
    localStorage.setItem("username", JSON.stringify(username));
    set({
      username
    })
  },
  setAsync: (async) => {
    localStorage.setItem("async", JSON.stringify(async));
    set({
      async
    })
  }
}))

export default useFormStore