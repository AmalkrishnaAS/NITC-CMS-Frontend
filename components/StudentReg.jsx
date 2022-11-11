import React from 'react'
import {
    Label,
    TextInput,
    Button,
    Checkbox,
    } from 'flowbite-react'
    import {HiMail} from 'react-icons/hi'
    import Link from 'next/link'
    import { useState } from 'react'


const StudentReg = () => {
  return (
    <div className=" px-4  md:w-[60vw] mx-auto  py-2   sm:px-6 lg:px-8 overflow-hidden">
      <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-100 mb-3 ">Register as a student</h3>
    <form className="">
    <div>
    
      
      <div className="mb-2 block">
        <Label
          htmlFor="name"
          value="Name"
        />
      </div>
      <TextInput
        id="name"
        name="name"
        type="text"
        placeholder="John Doe"
        required={true}
        shadow={true}
        
      />
      
      
    </div>
    <div>
    
      
      <div className="mb-2 block">
        <Label
          htmlFor="rollno"
          value="Roll Number"
        />
      </div>
      <TextInput
        id="rollno"
        name="rollno"
        type="text"
        placeholder="B200729CS"
        required={true}
        shadow={true}
        
      />
      
      
    </div>
    <div>
    
      
      <div className="mb-2 block">
        <Label
          htmlFor="email"
          value="Email"
        />
      </div>
      <TextInput
        id="email"
        name='email'
        type="email"
        placeholder="john@nitc.ac.in"
        required={true}
        shadow={true}
        
      />
      
      
    </div>
    <div>
    
      
      <div className="mb-2 block">
        <Label
          htmlFor="department"
          value="Department"
        />
      </div>
      <TextInput
        id="department"
        type="text"
        placeholder="Computer Science and Engineering"
        required={true}
        shadow={true}
        
      />
      
      
    </div>
    <div>
    
      
      <div className="mb-2 block">
        <Label
          htmlFor="password"
          value="Password"
        />
      </div>
      <TextInput
        id="cpassword"
        type="password"
        placeholder="********"
        name='password'
        required={true}
        shadow={true}
        
      />
      
      
    </div>
    <div>
    
      
      <div className="mb-2 block">
        <Label
          htmlFor="cpassword"
          value="Repeat Password"
        />
      </div>
      <TextInput
        id="cpassword"
        type="password"
        name='cpassword'
        placeholder="********"
        required={true}
        shadow={true}
        
      />
      
      
    </div>
   
   
    <div className="flex items-center gap-2 mt-3">
     
        <Link legacyBehavior href={'/login'}>
        <a className="text-blue-600 hover:underline dark:text-blue-500">
          Already have an account?
        </a>

        
        </Link>
     
    </div>
    <Button type="submit" className='md:w-[30vw] mx-auto'>
      Register new account
    </Button>
  </form>
    </div>
  )
}

export default StudentReg