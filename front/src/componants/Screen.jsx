import { useContext } from "react"
import "../assets/styles/screen.scss"
import { ThemeContext } from "../context/ThemeContext"
import PropTypes from "prop-types"

const Screen = ({ keysValue }) => {
  const { theme } = useContext(ThemeContext)
  return (
    <div className={`screen theme-${theme}`}>
      <p>{keysValue ? keysValue : "0"}</p>
    </div>
  )
}
Screen.propTypes = {
  keysValue: PropTypes.string,
}
export default Screen
