import * as React from "react"

import { useRouter } from "next/router"

import { Topbar } from "../../components/Navigation"
import profilePic from "../../public/img/sample-profile.jpeg"
import bgSamplePic from "../../public/img/bg-sample.jpg"
import { ProfileHeader } from "../../components/ProfileHeader"
import { ProfileMainCard } from "../../components/Cards"

const ProfilePage = () => {
  const router = useRouter()
  const { userName } = router.query

  return (
    <div className="min-h-screen bg-gray-150">
      <Topbar />
      <div className="main-container">
        <ProfileHeader image={bgSamplePic} />
        <div className="relative -top-24">
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
        </div>
      </div>
    </div>
  )
}

export default ProfilePage
