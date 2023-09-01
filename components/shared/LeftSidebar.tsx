import React from 'react'

import Link from "next/link"
import Image from 'next/image'

const LeftSidebar = () => {


  return (
    <section className='leftsidebar'>
        
        <div className='leftsidebar_link'>
            <Image src="/assets/employee.svg" alt="employee data" width={28} height={28}/>
            <p>Employee</p>
        </div>
        <div className='leftsidebar_link'>
            <Image src="/assets/add_user.svg" alt="employee data" width={28} height={28}/>
            <p>Add User</p>
        </div>
    </section>
  )
}

export default LeftSidebar