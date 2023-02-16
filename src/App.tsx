import { useMemo, useReducer, useState } from "react"
import nextId from "react-id-generator"

import "./App.module.scss"
import styles from "./App.module.scss"
import { BoxProps } from "./components/Box/Box"
import BoxList from "./components/BoxList/BoxList"
import Result from "./components/Result/Result"
import { boxesReducer } from "./reducers/Boxes/boxes"

const initialBoxes: BoxProps[] = ["A", "B", "C"].map((content) => ({
  id: nextId("box-"),
  text: content,
  isEditable: false,
}))

function App() {
  const [boxes, dispatchBoxes] = useReducer(boxesReducer, initialBoxes)

  const [isResult, setIsResult] = useState(false)

  const result = useMemo(() => {
    return boxes.reduce((str, curr) => str + curr.text, "")
  }, [boxes])

  return (
    <main className={styles["main"]}>
      <BoxList {...{ boxes, dispatchBoxes }} />
      {isResult && <Result content={result} />}
    </main>
  )
}

export default App
