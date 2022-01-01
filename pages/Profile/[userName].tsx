import React from 'react'
import { useRouter } from 'next/router'

const ProfilePage = () => {
    const router = useRouter()
    const {userName} = router.query
    return (
        <div>
            {userName}
        </div>
    )
}

export default ProfilePage
