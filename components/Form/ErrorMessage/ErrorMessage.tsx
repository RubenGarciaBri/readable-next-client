import * as React from "react"

import { FaExclamationCircle } from "react-icons/fa"

interface IPropTypes {
  errorMessage: string
}

const ErrorMessage = ({ errorMessage }: IPropTypes) => {
  return (
    <div className="flex items-center text-red-600 gap-x-3">
      <FaExclamationCircle className="w-6 h-6" />
      <p>{errorMessage}</p>
    </div>
  )
}

export default ErrorMessage
