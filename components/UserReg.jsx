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
    import {toast} from 'react-toastify'

import axios from 'axios'
import { useRouter } from 'next/router'
const UserReg = () => {
  const router=useRouter()
  //formData is the state variable
  //setFormData is the function to update the state variable
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    cpassword: '',
    department: '',
    id: '',
    name:''
  })
  const handleSubmit = async  (e) => {
    e.preventDefault()  
    if(formData.password!=formData.cpassword){
    toast.error("Passwords do not match")
    return
    }

    // check if the email ends with @nitc.ac.in
    if(!formData.email.endsWith("@nitc.ac.in")){
      toast.error("Email must end with @nitc.ac.in")
      return
    }
    else{
      try{
        const res=await axios.post(`${process.env.NEXT_PUBLIC_SERVER}/signup`,{
          email:formData.email,
          password:formData.password,
          department:formData.department,
          id:formData.id,
          role:"user",
          name:formData.name
        })
        toast.success("User Registered Successfully")

        console.log(res.data)
        router.push('/login')
       
      } catch(error){

        console.log(error)
        toast.error("User Already Registered")
      }
    }
    console.log(formData)
  
    
  }
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }
  return (
    <div className=" px-4  md:w-[60vw] mx-auto  py-2   sm:px-6 lg:px-8 overflow-hidden">
      <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-100 mb-3 ">Register as a User</h3>
    <form className=""
    onSubmit={handleSubmit}
    >
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
        value={formData.name}
        onChange={handleChange}
        
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
        value={formData.email}
        onChange={handleChange}
        
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
        value={formData.department}
        onChange={handleChange}
        name='department'

        
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
        value={formData.password}
        onChange={handleChange}
        
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
        value={formData.cpassword}
        onChange={handleChange}
        
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

export default UserReg