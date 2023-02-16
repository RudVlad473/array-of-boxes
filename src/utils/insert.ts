import { BoxProps } from "../components/Box/Box"

function insert<T>(arr: T[], item: T, index: number): T[] {
  //const newArr = ([] as T[]).concat(arr)

  return arr.splice(index, 0, item)
}

export { insert }
