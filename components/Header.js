/* eslint-disable jsx-a11y/alt-text */
import { BadgeCheckIcon,
      CollectionIcon,
      HomeIcon,
      LightningBoltIcon,
      SearchIcon,
      UserIcon
} from '@heroicons/react/outline'
import Image from 'next/image'
import React from 'react'
import hulu from '../public/huluICon.png'
import HeaderItem from './HeaderItem'

const Header = () => {
  return (
    <header className='flex flex-col md:flex-row justify-between items-center m-4 h-auto'>
      <div className='flex flex-grow justify-evenly max-w-2xl'>
        <HeaderItem title='HOME' Icon={HomeIcon}/>
        <HeaderItem title='TRENDING' Icon={LightningBoltIcon}/>
        <HeaderItem title='VERIFIED' Icon={BadgeCheckIcon}/>
        <HeaderItem title='SEARCH' Icon={SearchIcon}/>
        <HeaderItem title='USER' Icon={UserIcon}/>
      </div>
      <Image className='object-contain '  src={hulu} height={'100px'} width={'200px'}/>
     </header>
     
  )
}

export default Header