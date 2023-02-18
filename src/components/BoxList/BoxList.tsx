import React, { FC } from "react"
import nextId from "react-id-generator"

import plus from "../../assets/plus.svg"
import { addBox } from "../../reducers/Boxes/actionCreators"
import { BoxesAction } from "../../reducers/Boxes/types"
import Box, { BoxProps } from "../Box/Box"
import styles from "./BoxList.module.scss"

type BoxListProps = {
  boxes: BoxProps[]
  dispatchBoxes: React.Dispatch<BoxesAction>
}

const BoxList: FC<BoxListProps> = ({ boxes, dispatchBoxes }) => {
  return (
    <ul className={styles["box-list"]}>
      <li
        key={nextId("pad-")}
        className={styles["box-pad"]}
        onClick={() =>
          dispatchBoxes(addBox({ id: nextId("box-"), text: "", index: 0 }))
        }>
        <img src={plus} alt="+" />
      </li>
      {boxes.map((box, i) => {
        const newId = nextId("box-")

        return (
          <>
            <li key={newId} className={styles["box-container"]}>
              <Box {...box} dispatchBoxes={dispatchBoxes} />
            </li>
            <li
              key={nextId("pad-")}
              className={styles["box-pad"]}
              onClick={() =>
                dispatchBoxes(addBox({ id: newId, text: "", index: i + 1 }))
              }>
              <img src={plus} alt="+" />
            </li>
          </>
        )
      })}
    </ul>
  )
}

export default BoxList
