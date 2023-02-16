import nextId from "react-id-generator"

import { BoxProps } from "../../components/Box/Box"
import { insert } from "../../utils/insert"
import { AddBoxItemPayload, BoxesAction, ChangeContentPayload } from "./types"

function boxesReducer(
  boxes: BoxProps[],
  { type, payload }: BoxesAction
): BoxProps[] {
  switch (type) {
    case "ADD_BOX": {
      const pl = payload as AddBoxItemPayload

      const newBoxes = boxes.filter((box) => box.text)

      insert<(typeof boxes)[number]>(newBoxes, pl, pl.index)
      return newBoxes
    }
    // case "TOGGLE_EDITABLE": {
    //   console.log(1)
    //   return boxes.map((box) => ({
    //     ...box,
    //     isEditable:
    //       (payload as BoxProps["id"]) === box.id
    //         ? !box.isEditable
    //         : box.isEditable,
    //   }))
    // }
    // case "CHANGE_CONTENT": {
    //   const pl = payload as ChangeContentPayload

    //   return boxes.map((box) => ({
    //     ...box,
    //     text: pl.id === box.id ? pl.text : box.text,
    //   }))
    // }
    case "SUBMIT_BOX": {
      const pl = payload as ChangeContentPayload

      return boxes.map((box) => ({
        ...box,
        text: box.id === pl.id ? pl.text : box.text,
      }))
    }
  }
}

export { boxesReducer }
