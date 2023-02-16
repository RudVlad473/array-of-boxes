import { useCallback, useEffect, useRef, useState } from "react"

const useInput = (initialValue: string = "") => {
  const contentRef = useRef<HTMLDivElement>(null)

  const maxInputLength = 3

  const [value, setValue] = useState(initialValue)

  const onChange = useCallback(
    ({ currentTarget }: React.FormEvent<HTMLElement>) => {
      if ((currentTarget.textContent as string).length <= maxInputLength) {
        setValue(currentTarget.textContent || "")
      } else {
        currentTarget.textContent = `${currentTarget.textContent?.slice(
          0,
          maxInputLength
        )}`
      }
    },
    [maxInputLength]
  )

  const resetCaret = useCallback(() => {
    const el = contentRef.current

    if (el === null) return
    const selection = window.getSelection()
    const range = document.createRange()
    selection?.removeAllRanges()
    range.selectNodeContents(el)
    range.collapse(false)
    selection?.addRange(range)
  }, [contentRef.current])

  const focusContent = useCallback(() => {
    const el = contentRef.current

    el?.focus()
  }, [contentRef])

  const blurContent = useCallback(() => {
    contentRef.current?.blur()
  }, [contentRef])

  useEffect(() => {
    focusContent()
  }, [contentRef.current])

  return {
    contentRef,
    value,
    setValue,
    onChange,
    focusContent,
    blurContent,
    resetCaret,
  }
}

export { useInput }
