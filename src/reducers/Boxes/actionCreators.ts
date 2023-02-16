import { BoxProps } from "../../components/Box/Box"
import { AddBoxItemPayload, BoxesAction, ChangeContentPayload } from "./types"

const addBox = (args: AddBoxItemPayload): BoxesAction => ({
  type: "ADD_BOX",
  payload: args,
})

// const toggleEdit = (id: BoxProps["id"]): BoxesAction => ({
//   type: "TOGGLE_EDITABLE",
//   payload: id,
// })

// const changeContent = (args: ChangeContentPayload): BoxesAction => ({
//   type: "CHANGE_CONTENT",
//   payload: args,
// })

const submitBox = ({ text, id }: ChangeContentPayload): BoxesAction => ({
  type: "SUBMIT_BOX",
  payload: { text, id },
})

export {
  addBox,
  submitBox
  // toggleEdit,
  // changeContent
}
