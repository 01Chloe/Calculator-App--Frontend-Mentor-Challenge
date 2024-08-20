import "./App.scss"
import Footer from "./componants/Footer"
import ThemeSwitcher from "./componants/ThemeSwitcher"
import Screen from "./componants/Screen"
import KeysContainer from "./componants/KeysContainer"
import ThemeContextProvider from "./context/ThemeContext"
import { useState } from "react"

function App() {
  const [keysValue, setKeysValue] = useState("")

  return (
    <ThemeContextProvider>
      <header>
        <h1>calc</h1>
        <ThemeSwitcher />
      </header>
      <main>
        <Screen keysValue={keysValue} />
        <KeysContainer keysValue={keysValue} setKeysValue={setKeysValue} />
      </main>
      <Footer />
    </ThemeContextProvider>
  )
}

export default App
