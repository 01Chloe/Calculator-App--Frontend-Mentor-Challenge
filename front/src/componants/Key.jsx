import "../assets/styles/key.scss"
import PropTypes from "prop-types"
import { useContext } from "react"
import { ThemeContext } from "../context/ThemeContext"

const Key = ({ value, func, style }) => {
  const { theme } = useContext(ThemeContext)
  return (
    <button onClick={() => func()} className={`key theme-${theme} ${style}`}>
      {value}
    </button>
  )
}
Key.propTypes = {
  value: PropTypes.string,
  func: PropTypes.func,
  style: PropTypes.string,
}
export default Key
