import * as React from "react"

import { useRouter } from "next/router"

import { MailIcon, PhoneIcon } from "@heroicons/react/solid"

import { Topbar } from "../../components/Navigation"
import profilePic from "../../public/img/sample-profile.jpeg"
import bgSamplePic from "../../public/img/bg-sample.jpg"
import { ProfileHeader } from "../../components/ProfileHeader"
import { ProfileMainCard } from "../../components/Cards"

const ProfilePage = () => {
  const router = useRouter()
  const { userName } = router.query

  const profile = {
    name: "Ricardo Cooper",
    email: "ricardo.cooper@example.com",
    avatar:
      "https://images.unsplash.com/photo-1463453091185-61582044d556?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80",
    backgroundImage:
      "https://images.unsplash.com/photo-1444628838545-ac4016a5418a?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
    fields: [
      ["Phone", "(555) 123-4567"],
      ["Email", "ricardocooper@example.com"],
      ["Title", "Senior Front-End Developer"],
      ["Team", "Product Development"],
      ["Location", "San Francisco"],
      ["Sits", "Oasis, 4th floor"],
      ["Salary", "$145,000"],
      ["Birthday", "June 8, 1990"],
    ],
  }

  return (
    <div className="min-h-screen bg-gray-150">
      <Topbar />
      <div className="main-container">
        <div>
          <div>
            <img
              className="object-cover w-full h-32 rounded-b-lg lg:h-48"
              src={profile.backgroundImage}
              alt=""
            />
          </div>
          <div className="max-w-5xl px-4 mx-auto sm:px-6 lg:px-8">
            <div className="-mt-12 sm:-mt-16 sm:flex sm:items-end sm:space-x-5">
              <div className="flex">
                <img
                  className="w-24 h-24 rounded-full ring-4 ring-white sm:h-32 sm:w-32"
                  src={profile.avatar}
                  alt=""
                />
              </div>
              <div className="mt-6 sm:flex-1 sm:min-w-0 sm:flex sm:items-center sm:justify-end sm:space-x-6 sm:pb-1">
                <div className="flex-1 min-w-0 mt-6 sm:hidden md:block">
                  <h1 className="text-2xl font-bold text-gray-900 truncate">
                    {profile.name}
                  </h1>
                </div>
                <div className="flex flex-col mt-6 space-y-3 justify-stretch sm:flex-row sm:space-y-0 sm:space-x-4">
                  <button
                    type="button"
                    className="inline-flex justify-center px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-pink-500"
                  >
                    <MailIcon
                      className="w-5 h-5 mr-2 -ml-1 text-gray-400"
                      aria-hidden="true"
                    />
                    <span>Message</span>
                  </button>
                  <button
                    type="button"
                    className="inline-flex justify-center px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-pink-500"
                  >
                    <PhoneIcon
                      className="w-5 h-5 mr-2 -ml-1 text-gray-400"
                      aria-hidden="true"
                    />
                    <span>Call</span>
                  </button>
                </div>
              </div>
            </div>
            <div className="flex-1 hidden min-w-0 mt-6 sm:block md:hidden">
              <h1 className="text-2xl font-bold text-gray-900 truncate">
                {profile.name}
              </h1>
            </div>
          </div>
        </div>

        {/* <ProfileHeader image={bgSamplePic} /> */}

        {/* <div className="relative -top-24">
          <div className="flex justify-center">
            <ProfileMainCard
              profilePic={profilePic}
              name={"Ruben"}
              friendsNumber={84}
              location="London, UK"
            />
          </div>
          <div>
            <div className="flex mt-8 gap-x-8">
              <div className="w-1/4">
                <div className="p-8 mb-8 bg-white rounded-xl drop-shadow-lg">
                  <span className="block mb-2 font-semibold">Bio</span>
                  <p>
                    React Developer based in London, UK. Passionate about
                    technology and entrepreneurship.
                  </p>
                </div>
                <div className="p-8 bg-white rounded-xl drop-shadow-lg">
                  <span className="block mb-2 font-semibold">Friends</span>
                </div>
              </div>
              <div className="w-3/4">
                <div className="p-8 bg-white rounded-xl drop-shadow-lg">
                  <span className="block mb-2 font-semibold">Posts</span>
                </div>
              </div>
            </div>
          </div>
        </div> */}
      </div>
    </div>
  )
}

export default ProfilePage
