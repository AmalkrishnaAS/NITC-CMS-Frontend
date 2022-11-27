import React from 'react'
import TabGroup from '../components/TabGroup'
import {
    Button,
    Checkbox,
    Label,
    TextInput,
    } from 'flowbite-react'
    import {HiMail} from 'react-icons/hi'
    import Link from 'next/link'
    import { useState } from 'react'
    import { useEffect } from 'react'
import { useRouter } from 'next/router'
const register = ({user}) => {
  const router=useRouter()

  useEffect(() => {
    if(user) 
    {
      router.replace('/')
    }
    
  }, [])
  

  
  const [isCoommittee, setisCoommittee] = useState(false)


  return (
    <div className='p-4 '>
      <div className='tabGroup '>
        <TabGroup />

      </div>
    
    </div>
  )
}

export default register