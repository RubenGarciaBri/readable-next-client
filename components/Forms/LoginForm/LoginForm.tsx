import * as React from "react"

import { LogInData } from "../../../context/auth-context"
import { Form, Input } from "../../Form"
import { ErrorMessage } from "../../Form"

interface IPropTypes {
  logIn: (data: LogInData) => Promise<void>
  error: string | undefined
  setError: Function
}

const LoginForm = ({ logIn, error, setError }: IPropTypes) => {
  const [email, setEmail] = React.useState("")
  const [password, setPassword] = React.useState("")

  return (
    <Form
      submitFn={e => {
        e.preventDefault()
        logIn({ email, password })
      }}
      buttonText="Log In"
    >
      {error && <ErrorMessage errorMessage={error} />}
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
    </Form>
  )
}

export default LoginForm
