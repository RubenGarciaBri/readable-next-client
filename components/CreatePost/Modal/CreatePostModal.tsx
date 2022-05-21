import * as React from "react"

import ReactDOM from "react-dom"
import { FaTimes } from "react-icons/fa"
import { modalButtons } from "../../../data/modalButtons"
import profilePic from "../../../public/img/sample-profile.jpeg"
import { useOnClickOutside } from "../../../utils/hooks/useOnClickOutside"
import Image from "next/image"

interface IPropTypes {
  show: boolean
  onClose: Function
}

const CreatePostModal = ({ show, onClose }: IPropTypes) => {
  const [isBrowser, setIsBrowser] = React.useState(false)
  const [text, setText] = React.useState("")

  const ref = React.useRef<HTMLDivElement>(null)
  // TODO: Fix hook issue, currently not working
  useOnClickOutside(ref, () => {
    setText("")
    onClose()
  })

  React.useEffect(() => {
    setIsBrowser(true)
  }, [])

  const handleCloseClick = (e: any) => {
    e.preventDefault()
    setText("")
    onClose()
  }

  const modalContent = show && (
    <div
      ref={ref}
      className="absolute top-0 left-0 flex justify-center w-full h-full bg-gray-300/70"
    >
      <div className="relative mt-20 bg-white modal rounded-xl drop-shadow-lg">
        <div className="flex items-center px-8 py-6 border-b space-between">
          <p className="w-full text-lg">Create new post</p>
          <button
            onClick={e => handleCloseClick(e)}
            className="mt-0.5 cursor-pointer p-0.5"
          >
            <FaTimes size={22} />
          </button>
        </div>
        <div className="px-8 py-6">
          <div className="flex items-center">
            <Image
              src={profilePic}
              width={45}
              height={45}
              className="rounded-full shadow-inner"
            />
            <div className="ml-4">
              <span className="block -mb-1 font-semibold">Ruben Garcia</span>
              <span className="text-sm text-gray-600">@rubenGB</span>
            </div>
          </div>
          <textarea
            placeholder="What's on your mind?"
            className="w-full py-5 resize-none"
            onChange={e => setText(e.target.value)}
            value={text}
          ></textarea>
          <div className="flex items-center justify-between">
            <ul className="flex gap-x-4">
              {modalButtons &&
                modalButtons.map(({ Icon }, index) => {
                  return (
                    <li key={index} className="mt-1.5">
                      <button>{Icon}</button>
                    </li>
                  )
                })}
            </ul>
            <button className="px-12 py-3 font-semibold text-white rounded-full bg-orange-500">
              Post
            </button>
          </div>
        </div>
      </div>
    </div>
  )

  return isBrowser
    ? ReactDOM.createPortal(modalContent, document.getElementById("modal-root"))
    : null
}

export default CreatePostModal
