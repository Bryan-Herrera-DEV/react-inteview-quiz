import create from "zustand"

interface themeTypes {
  dark:boolean
  toggleTheme:()=> void
}

export const useStore = create<themeTypes>((set)=>({
  dark:true,
  toggleTheme: () => { set(state => ({ dark: !state.dark })) }
}))


