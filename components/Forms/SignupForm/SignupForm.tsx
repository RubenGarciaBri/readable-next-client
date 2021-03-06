import * as React from "react"

import { SignUpData } from "../../../context/auth-context"
import { Form, Input } from "../../Form"
import { ErrorMessage } from "../../Form"

interface IPropTypes {
  signUp: (data: SignUpData) => Promise<void>
  error: string | undefined
  setError: Function
}

const SignupForm = ({ signUp, error, setError }: IPropTypes) => {
  const [userName, setUserName] = React.useState("")
  const [email, setEmail] = React.useState("")
  const [password, setPassword] = React.useState("")
  const [confirmPassword, setConfirmPassword] = React.useState("")

  return (
    <Form
      submitFn={e => {
        e.preventDefault()

        if (password !== confirmPassword) {
          setError("Passwords do not match")
          return
        }

        signUp({ email, password, userName })
      }}
      buttonText="Create Account"
    >
      {error && <ErrorMessage errorMessage={error} />}
      <Input
        label="Name"
        id="userName"
        name="userName"
        type="text"
        value={userName}
        changeFn={value => setUserName(value)}
        required
      />
      <Input
        label="Email Address"
        id="email"
        name="email"
        type="email"
        value={email}
        changeFn={value => setEmail(value)}
        required
      />
      <Input
        label="Password"
        id="password"
        name="password"
        type="password"
        value={password}
        changeFn={value => setPassword(value)}
        required
      />
      <Input
        label="Confirm password"
        id="confirm-password"
        name="confirm-password"
        type="password"
        value={confirmPassword}
        changeFn={value => setConfirmPassword(value)}
        required
      />
    </Form>
  )
}

export default SignupForm
