/* eslint-disable jsx-a11y/alt-text */
import React from 'react'
import Image from 'next/image'
import { ThumbUpIcon } from '@heroicons/react/outline'
const Thumbnail = ({result}) => {
  const  base_url = 'https://image.tmdb.org/t/p/w500/'
  return (
    <div className='group cursor-pointer transition duration-200 
            ease-in tranform sm:hover:scale-105 hover:z-50 mx-2'>
       <Image layout='responsive' 
       src={
        `${base_url}${result.backdrop_path ||
            result.poster_path}` ||
             `${base_url}${result.poster_path}`
       } 
       height={1080} width={1920}/>
       <div className='p-2'>
       <p className='truncate max-w-md'>{result.overview}</p>
       <h2 className='mt-1 text-2xl transition-all duration-100 ease-in-out group-hover:font-bold'>{result.title || result.original_name || result.name}</h2>
       <p className='flex items-center opacity-0 group-hover:opacity-100'>
        {result.media_type && `${result.media_type} •`}{" "}
        {result.release_date || `${result.first_air_date} •`}{" "}
        <ThumbUpIcon className='h-5 mx-2'/>{result.vote_count}
       </p>
       </div>
      
    </div>
  )
}

export default Thumbnail