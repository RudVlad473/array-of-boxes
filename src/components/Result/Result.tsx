import React, { FC } from "react"

import styles from "./Result.module.scss"

const Result: FC<{ content: string }> = ({ content }) => {
  return <article className={styles["result"]}>{content}</article>
}

export default Result
