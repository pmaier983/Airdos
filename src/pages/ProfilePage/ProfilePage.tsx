import React from 'react'
import {
  Redirect,
} from 'react-router-dom'

import { useUserContext } from '../../contexts/UserProvider'
import { ProfilePageUserInfo } from './ProfilePageUserInfo'

const ProfilePage = () => {
  const [{ userInfo }] =useUserContext()

  if (!userInfo) {
    return <Redirect to="/" />
  }

  return (
    <>
      <ProfilePageUserInfo {...userInfo} />

    </>
  )
}

export { ProfilePage }
