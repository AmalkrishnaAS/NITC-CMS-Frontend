import { Button } from 'flowbite-react'
import React from 'react'
import { useRouter } from 'next/router'
import { useEffect } from 'react'
import {
    Label,
    TextInput,
    Avatar

} from 'flowbite-react'


const profile = ({user,logout
}) => {
    const router=useRouter()

    useEffect(() => {

       if(!localStorage.getItem('token')){
           router.push('/login')
       }
    
      
    }, [])
    



  return (

    
    <div className="w-sceen flex flex-col space-y-3 items-center mt-6 py-3">
    <img
        className="w-40 h-40 rounded-full"
        src={user?.avatar}
        alt="Jese image"
        />
        <div className="mb-9">
      <Label className="mb-2">Name</Label>
      <TextInput
        className="w-full"
        placeholder="Remarks"
        value={user?.name}
        disabled={true}
      />
    </div>
        <div className="">
      <Label className="mb-2">Email</Label>
      <TextInput
        className="w-full"
        placeholder="Remarks"
        value={user?.email}
        disabled={true}
      />
    </div>
        <div className="mb-9">
      <Label className="mb-2">Type</Label>
      <TextInput
        className="w-full"
        placeholder="Remarks"
        value={user?.type || 'Not Specified'}
        disabled={true}
      />
     
    </div>
        <div className="mb-9">
      <Label className="mb-2">Role</Label>
      <TextInput
        className="w-full"
        placeholder="Remarks"
        value={user?.role || 'Not Specified'}
        disabled={true}
      />
     
    </div>
        <div className="mb-9">
      <Label className="mb-2">Department</Label>
      <TextInput
        className="w-full"
        placeholder="Remarks"
        value={user?.department || 'Not Specified'}
        disabled={true}
      />
     
    </div>
        <Button
        onClick={
            logout
        }
        >
            Logout
        </Button>
      { user?.role==='committee head' && <Button
        onClick={
            ()=>router.push('/users')
        }
        >
            Manage Users
        </Button>}
    
    
    </div>
  )
}

export default profile