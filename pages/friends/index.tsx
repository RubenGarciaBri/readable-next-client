import * as React from "react"
import TopBar from "../../components/Navigation/TopBar/TopBar"
import ProfileCard from "../../components/Cards/ProfileCard/ProfileCard"
import NavBar from "../../components/Navigation/NavBar/NavBar"
import FriendsCardRequest from "../../components/Cards/FriendsCard/FriendsCardRequest"
import FriendsCardExisting from "../../components/Cards/FriendsCard/FriendsCardExisting"
import { linksArray } from "../../data/linksArray"
import { contacts } from "../../data/contacts"
import ProfilePicture from "../../components/ProfilePicture/ProfilePicture"

const FriendsPage = () => {
  return (
    <>
      <TopBar />
      <div className="px-4 main-container">
        <div className="flex justify-between mt-8 alig-center gap-x-8">
          <div className="flex flex-col gap-8 basis-1/4">
            <ProfileCard name="Ruben Garcia" userName="@rubenGB" />
            <NavBar linksArray={linksArray} />
          </div>
          <div className="basis-3/4">
            <p className="mb-4 font-semibold">
              New Requests <span className="text-gray-400 ">(3)</span>
            </p>
            <div className="flex flex-wrap gap-6">
              {contacts &&
                contacts
                  .slice(2, 5)
                  .map(({ profilePicture, name, userName }, index) => {
                    return (
                      <div key={userName}>
                        <FriendsCardRequest
                          profilePicture={profilePicture}
                          name={name}
                          userName={userName}
                        />
                      </div>
                    )
                  })}
            </div>
            <p className="mt-8 mb-4 font-semibold">
              Friends <span className="text-gray-400 ">(84)</span>
            </p>
            <div className="flex flex-wrap gap-6">
              {contacts &&
                contacts.map(({ profilePicture, name, userName }) => {
                  return (
                    <FriendsCardExisting
                      profilePicture={profilePicture}
                      name={name}
                      userName={userName}
                    />
                  )
                })}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default FriendsPage
