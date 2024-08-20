import { useContext } from "react"
import { ThemeContext } from "../context/ThemeContext"
import "../assets/styles/theme-switcher.scss"

const ThemeSwitcher = () => {
  const { theme, toggleTheme } = useContext(ThemeContext)
  return (
    <div className="theme-switcher-container">
      <p className="theme-switcher-txt">THEME</p>
      <div className="theme-switcher-content">
        <div className="theme-switcher-label">
          <p className="theme-switcher-number">1</p>
          <p className="theme-switcher-number">2</p>
          <p className="theme-switcher-number">3</p>
        </div>
        <div className={`theme-switcher-toggle-btn theme-${theme}`}>
          <button
            onClick={() => toggleTheme("one")}
            className="theme-switcher-btn"
          >
            1
          </button>
          <button
            onClick={() => toggleTheme("two")}
            className="theme-switcher-btn"
          >
            2
          </button>
          <button
            onClick={() => toggleTheme("three")}
            className="theme-switcher-btn"
          >
            3
          </button>
          <div className={`theme-switcher-toggle theme-${theme}`}></div>
        </div>
      </div>
    </div>
  )
}
export default ThemeSwitcher
