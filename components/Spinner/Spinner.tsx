import * as React from "react"

import { BeatLoader } from "react-spinners"
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
    <BeatLoader
      color={color ? color : "#2563EB"}
      css={spinnerStyles}
      size={size ? size : 20}
    />
  )
}

export default Spinner
