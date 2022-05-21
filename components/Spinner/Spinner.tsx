import * as React from "react"

import { ClipLoader } from "react-spinners"
import { css } from "@emotion/react"

export const spinnerStyles = css`
  display: block;
  margin: 100px auto;
`

interface IPropTypes {
  color?: string
  size?: number
}

export const Spinner = ({ color, size }: IPropTypes) => {
  return (
    <ClipLoader
      color={color ? color : "black"}
      css={spinnerStyles}
      size={size ? size : 50}
    />
  )
}

export default Spinner
