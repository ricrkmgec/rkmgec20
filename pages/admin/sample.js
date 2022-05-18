import Link from 'next/link'
import React from 'react'
import { GiLizardTongue, GiWhiteBook } from 'react-icons/gi';
import { FaFilePdf } from 'react-icons/fa';
import { SiGooglescholar } from 'react-icons/si';
import { BsFillCalendar2EventFill } from 'react-icons/bs';
import styles from '../../styles/Admin.module.css'
function sample() {
let list = document.getElementById('li')
for(let i=0;i<list.length;i++){
  list[i].onClick=()=>{
    let j=0;
    while(j<GiLizardTongue.length){
      list[j++].className={};
    }
  }
  list[i].className='styles.active'
}

  return (
    <div className='body'>
        <ul className={styles.ul}>
            <li id='li' className={styles.active}  onClick={()=>clicked}>
              <b className={styles.b1+styles.active}></b>
              <b className={styles.b2} ></b>
              <Link href='' ><a ><span className={styles.icons}><GiWhiteBook/></span>
            <span className={styles.title}>Books</span></a></Link></li>
            <li id='li'><Link href=''><a ><span className={styles.icons}><FaFilePdf/></span>
            <span className={styles.title}>Ebook</span></a></Link></li>
            <li id='li'><Link href=''><a ><span className={styles.icons}><SiGooglescholar/></span>
            <span className={styles.title}>ScholRSHIP</span></a></Link></li>
            <li id='li'><Link href=''><a ><span className={styles.icons}><BsFillCalendar2EventFill/></span>
            <span className={styles.title}>Events</span></a></Link></li>
            {/* <li><Link href=''><a ><span></span>
            <span>Gate</span></a></Link></li> */}
        </ul>
    </div>
  )
}

export default sample