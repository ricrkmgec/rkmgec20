import React from 'react'
import gui from '../public/Ellipsis-1s-200px.svg'
import Image from 'next/image'

function loading() {
  return (
    <div className='ok' style={{justifyContent:'center',marginInline:'15rem',alignItems:'center',display:'block',left:'auto'}}>
        <Image style={{padding:'auto'}}  src={gui} alt='gui' height={500} width={670} />
        <style>{`
        .ok{
          align-items: center;
          justify-content: center;
          left:50%;
        }
        `}</style>
    </div>
  )
}

export default loading