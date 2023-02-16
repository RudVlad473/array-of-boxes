import classNames from "classnames"
import { FC, useState } from "react"

import { useInput } from "../../hooks/useInput"
import { submitBox } from "../../reducers/Boxes/actionCreators"
//import { changeContent, toggleEdit } from "../../reducers/Boxes/actionCreators"
import { DispatchBoxesType } from "../../reducers/Boxes/types"
import styles from "./Box.module.scss"

type BoxProps = {
  id: string
  text: string
}

const Box: FC<
  BoxProps & {
    dispatchBoxes: DispatchBoxesType
  }
> = ({ id, text, dispatchBoxes }) => {
  const [isEditable, setIsEditable] = useState(false)

  const { contentRef, value, onChange, focusContent, resetCaret } =
    useInput(text)

  return (
    <section
      //ref={formRef}
      className={classNames(styles["box"], {
        [styles["box--editable"]]: isEditable,
      })}
      onMouseEnter={(e) => {
        resetCaret()
        setIsEditable(true)
      }}
      onMouseLeave={(e) => {
        setIsEditable(false)
        console.log(value)
        dispatchBoxes(submitBox({ text: value, id }))
      }}>
      <header
        ref={contentRef}
        contentEditable={isEditable}
        className={classNames(styles["content"], "ellipsis-overflow")}
        onInput={(e) => {
          onChange(e)
          resetCaret()
        }}>
        {value}
      </header>
    </section>
  )
}

export default Box
export type { BoxProps }
