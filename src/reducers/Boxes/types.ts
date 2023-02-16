import { BoxProps } from "../../components/Box/Box"

type BoxesTypes =
  | "ADD_BOX"
  // | "TOGGLE_EDITABLE"
  // | "CHANGE_CONTENT"
  | "SUBMIT_BOX"

type AddBoxItemPayload = BoxProps & {
  index: number
}

type ChangeContentPayload = BoxProps

type BoxesPayload = AddBoxItemPayload | BoxProps["id"] | ChangeContentPayload

interface BoxesAction {
  type: BoxesTypes
  payload: BoxesPayload
}

type DispatchBoxesType = React.Dispatch<BoxesAction>

export type {
  BoxesTypes,
  BoxesPayload,
  BoxesAction,
  AddBoxItemPayload,
  DispatchBoxesType,
  ChangeContentPayload,
}
