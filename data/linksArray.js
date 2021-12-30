import { FaHome, FaUsers, FaCamera, FaComment, FaCog } from "react-icons/fa"

export const linksArray = [
  {
    title: "Home",
    url: "/",
    Icon: <FaHome size={20} />,
  },
  {
    title: "Friends",
    url: "/friends",
    Icon: <FaUsers size={20} />,
  },
  {
    title: "Photos",
    url: "/photos",
    Icon: <FaCamera size={20} />,
  },
  {
    title: "Chat",
    url: "/chat",
    Icon: <FaComment size={20} />,
  },
  {
    title: "Settings",
    url: "/settings",
    Icon: <FaCog size={20} />,
  },
]
