import * as React from "react"

import { FaArrowDown, FaArrowUp } from "react-icons/fa"

const Voting = () => {
  return (
    <div className="flex flex-col  gap-y-0.5">
      <button onClick={() => console.log("Arrow up clicked!")}>
        <FaArrowUp />
      </button>
      <span>17</span>
      <button onClick={() => console.log("Arrow up clicked!")}>
        <FaArrowDown />
      </button>
    </div>
  )
}

export default Voting
