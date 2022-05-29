import * as React from "react"

import { Form, Input } from "../../Form"

const LoginForm = () => {
  const [email, setEmail] = React.useState("")
  const [password, setPassword] = React.useState("")

  return (
    <Form
      submitFn={e => {
        e.preventDefault()
        console.log({ email })
        console.log({ password })
      }}
      buttonText="Log In"
    >
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
