import * as React from "react"

interface IPropTypes {
  buttonText: string
  submitFn: (e: React.FormEvent<HTMLFormElement>) => void
  children: React.ReactNode
}

const Form = ({ buttonText, submitFn, children }: IPropTypes) => {
  return (
    <form
      className="flex flex-col px-8 py-10 text-left bg-white rounded-b-lg shadow-md gap-y-6 sm:px-10"
      onSubmit={e => submitFn(e)}
    >
      {children}
      <button
        type="submit"
        className="flex justify-center w-full px-4 py-3 text-sm font-medium text-white bg-blue-600 border border-transparent rounded-md shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-600"
      >
        {buttonText}
      </button>
    </form>
  )
}

export default Form
