import React from 'react'
import {
  Label,
  TextInput,
  Button

} from 'flowbite-react'
import Link from 'next/link'
import { useState } from 'react'
import axios from 'axios'
import {toast} from 'react-toastify'
import Select from 'react-select'
import { useRouter } from 'next/router'

const CommitteReg = () => {
  const router=useRouter()
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    cpassword: "",
    designation: "",
    role:"section head",
    type:""
  });
  const opts=[
    {
      value:'Maintainence',
      label:'Maintainence'
    },
    {
      value:'Academic',
      label:'Academic'
      
    },
    {
      value:'Hostel',
      label:'Hostel'
    },
    {
      value:'Other',
      label:'Other'
    }

  ]

  const handleSelect = (event,action) => {
    setFormData({
      ...formData,
      [action.name]: event.value,
    });
  };

  const handleChange = async (e) => {
  
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async  (e) => {
    e.preventDefault();
    console.log(formData.role)
    if(formData.password!=formData.cpassword){
      toast.error("Password and Confirm Password should be same")
    }
    else if(!formData.email.endsWith("@nitc.ac.in")){
      toast.error("Email must end with @nitc.ac.in")
      return
    }
    else{
      try{
        const res=await axios.post('http://localhost:5000/signup',{
          name:formData.name,
          email:formData.email,
          password:formData.password,
          designation:formData.designation,
          role:'section head',
          type:formData.type
        })
        console.log(res.data)
        toast.success("Committee Member Registered Successfully")
        router.push('/login')

      } catch(error){
        console.log(error)
        toast.error("Committee Member Already Registered")
      }

     
     
      
    }
    console.log(formData);
    //clear form
    setFormData({
      name: "",
      email: "",
      password: "",
      cpassword: "",
      designation: "",
    });
  };
  return (
    <div className=" px-4  md:w-[60vw] mx-auto  py-2   sm:px-6 lg:px-8 mb-8">
      <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-100 mb-3 ">Register as a Section Head </h3>
    <form className=""
    onSubmit={
        handleSubmit
    }>
    
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
        onChange={handleChange}
        value={formData.name}
        
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
        onChange={handleChange}

        value={formData.email}
        
      />
      
      
    </div>
    <div>
    
      
      <div className="mb-2 block">
        <Label
          htmlFor="designation"
          value="Designation"
        />
      </div>
      <TextInput
        id="designation"
        type="text"
        placeholder="HOD"
        required={true}
        shadow={true}
        name="designation"
        onChange={handleChange}
        value={formData.designation}
        
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
        id="password"
        type="password"
        placeholder="********"
        name='password'
        required={true}
        shadow={true}
        onChange={handleChange}
        value={formData.password}
        
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
        onChange={handleChange}
        value={formData.cpassword}
        
      />
      <Select
      options={opts}
      onChange={handleSelect}
      name="type"
      placeholder="Select Type"
      className="mt-3"
      ></Select>
      
      
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

export default CommitteReg