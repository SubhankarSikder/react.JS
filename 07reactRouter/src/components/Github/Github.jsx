import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'


function Github() {

    const data = useLoaderData()

    // const [data, setData] = useState([])
    // useEffect(() => {
    //     fetch('https://api.github.com/users/subhankarsikder')
    //     .then(response => response.json())
    //     .then(data => setData(data))
    // }, [])

  return (
    <div className='bg-pink-800 text-white text-3xl p-4 text-center flex-col align-middle'>Github followers : {data.followers}
    <img src={data.avatar_url} alt="github pic" width={300} height={400} />
    </div>
  )
}

export default Github

export const githubInfoLoader = async () => {
    const response = await fetch('https://api.github.com/users/subhankarsikder')
    return response.json()
}