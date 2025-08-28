import React from 'react'
import { useLoaderData } from 'react-router-dom'
import Dress_Card from './Dress_Card'

const All_Category = () => {
  const dresses=useLoaderData()
  return (
    <div >
      <h1 className='text-center lg:text-4xl md:text-2xl'>All Category Dress is Here.</h1>
     <div className='grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-3'>
       {
        dresses.map(dress=><Dress_Card
           key={dress._id}
           dress={dress}

        ></Dress_Card>)
      }
     </div>
    </div>
  )
}

export default All_Category