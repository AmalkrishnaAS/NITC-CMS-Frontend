import React from 'react'
import Select from 'react-select'
import { useState } from 'react'
import { useRouter } from 'next/router'
import { useEffect } from 'react'
import {
  Textarea,
  Label,TextInput,Button
} from 'flowbite-react'
import axios from 'axios'
import { toast } from 'react-toastify'
const create = ({user}) => {
  const router = useRouter();
  useEffect(() => {

    if(user?.role!=="User") {
      router.push('/')
    }
    
  
    
  }, [])
  
    const [formData, setFormData] = useState({
        title: "",
        description: "",
        type: "",
        status: "Open",
        location: "",

    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });

    };

    const handleSelect = (event,action) => {
        setFormData({
            ...formData,
            [action.name]: event.value,
        });
    };


    const handleSubmit = async (e) => {
        e.preventDefault()
        if(formData.type==="") {
          toast.error("Please select a type")
          return;
        }
        console.log(localStorage.getItem('token'))
        const res=await axios.post('http://localhost:5000/complaint',{
          title:formData.title,
          description:formData.description,
          type:formData.type,
          status:formData.status,
          location:formData.location
        },
        {headers:{
          'x-access-token':localStorage.getItem('token')
        }})
        console.log(localStorage.getItem('token'))
        console.log(res)

        router.push('/')

        

        
    };

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
  return (
    <div className="p-6 max-w-[900px] mx-auto">
      <h1 className="text-2xl font-bold text-gray-800 dark:text-gray-100 mb-3 ">Raise a Complaint</h1>
        
    <form onSubmit={
        handleSubmit
    }>
    <div>
  <div className="mb-2 block">
    <Label
      htmlFor="email3"
      value="Title"
    />
  </div>
  <TextInput
    id="Title"
    type="Text"
    placeholder="Title"
    required={true}
    name="title"
    value={formData.title}
    onChange={handleChange}
   
  />
</div>
    <div>
  <div className="mb-2 block">
    <Label
      htmlFor="Name"
      value="Full Name"
    />
  </div>
  <TextInput
    id="Name"
    type="text"
    value={user?.name}
    disabled={true}
    placeholder="John Doe"
    required={true}
   
  />
</div>
    <div>
  <div className="mb-2 block">
    <Label
      htmlFor="email3"
      value="Your email"
    />
  </div>
  <TextInput
    id="email3"
    type="email"
    placeholder="name@flowbite.com"
    value={user?.email}
    required={true}
   
  />
</div>
    <div>
  <div className="mb-2 block">
    <Label
      htmlFor="email3"
      value="Your department"
    />
  </div>
  <TextInput
    id="email3"
    type="text"
    value={user?.department}
    placeholder="Computer Science"
    required={true}
   
  />
</div>
    <div>
  <div className="mb-2 block">
    <Label
      htmlFor="email3"
      value="location"
    />
  </div>
  <TextInput
    id="location"
    type="text"
    value={user?.location}
    placeholder="Mini Canteen"
    name="location"
    onChange={handleChange}
   
  />
</div>
    <div id="textarea">
  <div className="mb-2 block">
    <Label
      htmlFor="description"
      value="Description"
    />
  </div>
  <Textarea
    id="description"
    placeholder="Describe your issue"
    required={true}
    rows={4}
    name="description"
    value={formData.description}
    onChange={handleChange}
  />
</div>
    
   
      
      <div class="relative z-0 mb-6 w-full group mt-4">
          <Select placeholder='Type' options={opts}
          onChange={handleSelect}
          name="type"
          required={true}
        

          
          ></Select>
      </div>
   
   <Button
   type='submit'
   >
      Submit
   </Button>
  </form>
  </div>
  )
}

export default create