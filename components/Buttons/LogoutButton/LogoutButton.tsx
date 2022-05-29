import * as React from "react"

import { FaSignOutAlt } from "react-icons/fa"
import { NavButtonBase } from "../NavButtonBase"

const LogoutButton = () => {
  return (
    <NavButtonBase>
      <FaSignOutAlt />
    </NavButtonBase>
  )
}

export default LogoutButton
