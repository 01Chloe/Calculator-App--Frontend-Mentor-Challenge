import { createContext, useState, useEffect } from "react"
import PropTypes from "prop-types"

export const ThemeContext = createContext()

const ThemeContextProvider = ({ children }) => {
  const [theme, setTheme] = useState("one")

  const toggleTheme = (themeName) => {
    setTheme(themeName)
  }

  useEffect(() => {
    if (theme === "one") {
      document.body.classList.add("theme-one")
      document.body.classList.remove("theme-two")
      document.body.classList.remove("theme-three")
    }
    if (theme === "two") {
      document.body.classList.remove("theme-one")
      document.body.classList.add("theme-two")
      document.body.classList.remove("theme-three")
    }
    if (theme === "three") {
      document.body.classList.remove("theme-one")
      document.body.classList.remove("theme-two")
      document.body.classList.add("theme-three")
    }
  })

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}
ThemeContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
}
export default ThemeContextProvider
