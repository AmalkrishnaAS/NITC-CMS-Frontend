import React from 'react'
import Title from '../components/Title'
import { createAvatar } from '@dicebear/avatars'
import UsersTable from '../components/UsersTable'


const users = () => {

    

    
  return (
    <div>
        <header className='flex  my-4 px-4 '>
        <Title text='Pending Requests' count='1' />
        </header>
        <UsersTable />
      

    </div>
  )
}

export default users