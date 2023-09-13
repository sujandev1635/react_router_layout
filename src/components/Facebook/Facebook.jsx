import React, { useState,useEffect } from 'react'
import { useLoaderData } from 'react-router-dom'

function Facebook() {
  const data= useLoaderData()
  // const [data, setData] =useState([])
  // useEffect(() => {
  //     fetch('https://api.github.com/users/hiteshchoudhary')
  //     .then(Response =>Response.json())
  //     .then(data =>{
  //       console.log(data)
  //       setData(data)
  //     })
  //   }, [])

   return (

    <div>
      <div className='bg-blue-950 text-center text-white mt-10 p-4'>Facebook Followers : {data.followers}
      <img src={data.avatar_url} alt="avatar image" width={300} />
      </div>
      
    </div>
   )
    
    
   

  
}

export default Facebook


export const facebookInfoLoader =async()=>{
  const response =await fetch('https://api.github.com/users/hiteshchoudhary')
  return response.json()
}