import React from 'react'
import { useSelector } from 'react-redux'

const AuthModal = () => {
  const { authModalOpen } = useSelector(state => state.authModal)
  return <div>AuthModal</div>
}

export default AuthModal
