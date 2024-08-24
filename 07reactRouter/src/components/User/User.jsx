import React from 'react'
import { useParams } from 'react-router-dom'

function User() {
  const {userid} = useParams()
  return (
    <div className='bg-yellow-300 text-3xl p-4 text-center'>User : {userid}</div>
  )
}

export default User