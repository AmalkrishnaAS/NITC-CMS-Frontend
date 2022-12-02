import React from 'react'
import Title from '../components/Title'
import { createAvatar } from '@dicebear/avatars'
import UsersTable from '../components/UsersTable'
import { useState, useEffect } from 'react'
import axios from 'axios'
import { useRouter } from 'next/router'
import { toast } from 'react-toastify'

const users = ({user}) => {
  const [users, setUsers] = useState([]);
  const router = useRouter();

  useEffect(() => {
    if( user&& user?.role!=="committee head") {
      router.push('/')

      toast.warn("You are not authorized to view this page")
      
    }
    axios.get('http://localhost:5000/pending_reqs',{
      headers:{
        'x-access-token':localStorage.getItem('token')
      }
  })
    .then(res => {
      console.log(res.data)
      setUsers(res.data)
    }
    )
  
  
  }, [])

    

    
  return (
    <div>
        <header className='flex  my-4 px-4 '>
        <Title text='Pending Requests' count={users.length} />
        </header>
        <UsersTable users={users} setUsers={
          setUsers
        } />
      

    </div>
  )
}

export default users