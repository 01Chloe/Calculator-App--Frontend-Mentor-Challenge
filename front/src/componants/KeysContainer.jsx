import "../assets/styles/keys-container.scss"
import Key from "./Key"
import { useContext } from "react"
import { ThemeContext } from "../context/ThemeContext"
import PropTypes from "prop-types"

const KeysContainer = ({ keysValue, setKeysValue }) => {
  const { theme } = useContext(ThemeContext)

  const handleKeys = (value) => {
    if (
      keysValue === "" &&
      (value === "0" ||
        value === "." ||
        value === "+" ||
        value === "x" ||
        value === "/")
    ) {
      return
    } else {
      setKeysValue(keysValue + value)
    }
  }

  const calculate = () => {
    let allKeys = keysValue.replaceAll("x", "*")

    const numbers = allKeys.split(/[-+*/]/).map(Number)
    const operators = allKeys.replace(/[0-9]|\./g, "").split("")

    let i = 0
    while (i < operators.length) {
      if (operators[i] === "*" || operators[i] === "/") {
        const result =
          operators[i] === "*"
            ? numbers[i] * numbers[i + 1]
            : numbers[i] / numbers[i + 1]
        numbers.splice(i, 2, result)
        operators.splice(i, 1)
      } else {
        i++
      }
    }

    i = 0
    while (i < operators.length) {
      const result =
        operators[i] === "+"
          ? numbers[i] + numbers[i + 1]
          : numbers[i] - numbers[i + 1]
      numbers.splice(i, 2, result)
      operators.splice(i, 1)
    }

    let finalResult = numbers[0]

    if (finalResult % 1 !== 0) {
      finalResult = finalResult.toFixed(2)
    }

    setKeysValue(finalResult.toString())
  }

  return (
    <div className={`keys-container theme-${theme}`}>
      <Key value={"7"} func={() => handleKeys("7")} />
      <Key value={"8"} func={() => handleKeys("8")} />
      <Key value={"9"} func={() => handleKeys("9")} />
      <Key
        value={"del"}
        func={() => setKeysValue(keysValue.slice(0, -1))}
        style="raz"
      />
      <Key value={"4"} func={() => handleKeys("4")} />
      <Key value={"5"} func={() => handleKeys("5")} />
      <Key value={"6"} func={() => handleKeys("6")} />
      <Key value={"+"} func={() => handleKeys("+")} />
      <Key value={"1"} func={() => handleKeys("1")} />
      <Key value={"2"} func={() => handleKeys("2")} />
      <Key value={"3"} func={() => handleKeys("3")} />
      <Key value={"-"} func={() => handleKeys("-")} />
      <Key value={"."} func={() => handleKeys(".")} />
      <Key value={"0"} func={() => handleKeys("0")} />
      <Key value={"/"} func={() => handleKeys("/")} />
      <Key value={"x"} func={() => handleKeys("x")} />
      <Key value={"reset"} func={() => setKeysValue("")} style="raz reset" />
      <Key value={"="} func={() => calculate()} style="equal" />
    </div>
  )
}
KeysContainer.propTypes = {
  keysValue: PropTypes.string,
  setKeysValue: PropTypes.func,
}
export default KeysContainer
