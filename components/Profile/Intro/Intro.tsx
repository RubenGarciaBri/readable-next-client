import * as React from "react"

const Intro = () => {
  return (
    <div className="col-span-5 bg-white rounded-md shadow">
      <h3 className="p-4 font-bold border-b border-gray-300">Intro</h3>
      <div className="flex flex-col p-4 gap-y-3">
        <div>
          <h3 className="font-bold">Bio</h3>
          <p>Back-end Developer, surfer and father of three</p>
        </div>
        <div>
          <h3 className="font-bold">Lives in</h3>
          <p>San Jose, CA</p>
        </div>
        <div>
          <h3 className="font-bold">Friends</h3>
          <p>7</p>
        </div>
      </div>
    </div>
  )
}

export default Intro
