import * as React from "react"

interface IPropTypes {
  label?: string
  id: string
  name: string
  type: string
  value: string
  changeFn: (value: string) => void
  required?: boolean
}

const Input = ({
  label,
  id,
  name,
  type,
  value,
  changeFn,
  required,
}: IPropTypes) => {
  return (
    <div>
      {label && (
        <label htmlFor={id} className="block text-sm font-medium text-gray-600">
          {label}
        </label>
      )}
      <input
        id={id}
        name={name}
        type={type}
        value={value}
        onChange={e => changeFn(e.target.value)}
        required={required}
        className="block w-full px-3 py-2 mt-1 placeholder-gray-400 border border-gray-300 rounded-md shadow-sm appearance-none focus:outline-none focus:ring-blue-600 focus:border-blue-600 sm:text-sm"
      />
    </div>
  )
}

export default Input
