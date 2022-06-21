import * as React from "react"

interface IPropTypes {
  backgroundImage: string
}
/**
 * Creates a Header component for the profile page that contains a background image
 * REQUIRED PROPS
 * @param {string} backgroundImage - The header background image 

 * @return {JSX.Element} Returns the Header component
 */
const Header = ({ backgroundImage }: IPropTypes) => {
  return (
    <div className="bg-gray-300">
      <img
        className="object-cover w-full h-32 rounded-b-lg lg:h-48"
        src={backgroundImage}
        alt="Profile background image"
      />
    </div>
  )
}

export default Header
