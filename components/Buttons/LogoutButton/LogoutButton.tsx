import * as React from "react"

import { useAuth } from "../../../context/auth-context"
import { FaSignOutAlt } from "react-icons/fa"
import { NavButtonBase } from "../NavButtonBase"

const LogoutButton = () => {
  const { logOut } = useAuth()

  return (
    <NavButtonBase clickFn={logOut}>
      <FaSignOutAlt />
    </NavButtonBase>
  )
}

export default LogoutButton
