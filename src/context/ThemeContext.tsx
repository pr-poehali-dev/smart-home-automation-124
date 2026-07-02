import { createContext, useContext, useState, useEffect, ReactNode } from "react"

type Theme = "light" | "bw"

interface ThemeContextType {
  theme: Theme
  toggleTheme: () => void
}

const ThemeContext = createContext<ThemeContextType>({
  theme: "light",
  toggleTheme: () => {},
})

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setTheme] = useState<Theme>(() => {
    return (localStorage.getItem("allshop-theme") as Theme) || "light"
  })

  useEffect(() => {
    const root = document.documentElement
    root.classList.remove("theme-bw")
    if (theme === "bw") {
      root.classList.add("theme-bw")
    }
    localStorage.setItem("allshop-theme", theme)
  }, [theme])

  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "bw" : "light"))
  }

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}

export function useTheme() {
  return useContext(ThemeContext)
}

export default ThemeContext
