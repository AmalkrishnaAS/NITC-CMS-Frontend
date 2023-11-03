import React from 'react'
import {useRouter} from 'next/router'
import { useEffect,useState } from 'react'
import axios from 'axios'
import {
    Label,TextInput,Textarea,Button
} from 'flowbite-react'

import Select from 'react-select'
import {getOptsbyStatus} from '../../../lib/fns'




const index = ({user}) => {

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

      const opts2=[
        {
          value:'Processing',
          label:'Processing'
        },
        {
          value:'Resolved',
          label:'Resolved'
        },
        {
          value:'Open',
          label:'Open'
        },
      ]
    const router = useRouter();
    const [complaints, setComplaints] = useState(null)
    useEffect(() => {
        const {id} = router.query
           console.log(id)
           axios.get(`${process.env.NEXT_PUBLIC_SERVER}/complaint/${id}`,{
            headers:{
              'x-access-token':localStorage.getItem('token')
           },
    })
           .then(res => {
               console.log(res.data)
               setComplaints(res.data)
               setFormData(complaints)
               
           })
           .catch(err => {
               console.log(err)
           })
   }, [router.query])
  
  
  
const handleChange=(e)=>{
   setComplaints({
         ...complaints,
            [e.target.name]: e.target.value,
   })

}
    const handleSubmit=async (e)=>{
        e.preventDefault()


      console.log(complaints)

      if(user.role==='committee head') {
        console.log(complaints.id)
        const res=await axios.put(`${process.env.NEXT_PUBLIC_SERVER}/changeStatus/${complaints?.id}`,{
            status:complaints.status,
        },
        {headers:{
          'x-access-token':localStorage.getItem('token')
        }})
        console.log(res)
        await router.push('/')
        return;
        
      }
      const res=axios.put(`${process.env.NEXT_PUBLIC_SERVER}/complaint/${complaints.id}`,{
        title:complaints.title,
        description:complaints.description,
        type:complaints.type,
        status:complaints.status,
        location:complaints.location
      },
      {headers:{
        'x-access-token':localStorage.getItem('token')
      }})
      console.log(res)
      router.push('/')





    }

    const handleSelect=(event,action)=>{
      
      setComplaints(
        {
            ...complaints,
            [action.name]: event.value,
        }
      )
      console.log(complaints.status)
    };

    
   
    
  return (
    <div className="p-6 max-w-[900px] mx-auto">
    <h1 className="text-2xl font-bold text-gray-800 dark:text-gray-100 mb-3 ">Update a Complaint</h1>
      
  <form onSubmit={
      handleSubmit
  }>
  {user?.role==='User'&&<div>
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
  value={complaints?.title}
  onChange={handleChange}

  disabled={user?.role==='admin'}
 
/>
</div>}
  {user?.role==='User'&&<div>
<div className="mb-2 block">
  <Label
    htmlFor="email3"
    value="location"
  />
</div>
<TextInput
  id="location"
  type="Text"
  placeholder="location"
  name="location"
  value={complaints?.location}
  onChange={handleChange}

  disabled={user?.role==='admin'}
 
/>
</div>}
 
  
  
  {user?.role==='User'&&<div id="textarea">
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
  value={complaints?.description}
  onChange={handleChange}
  disabled={user?.role==='admin'}

/>
</div>}
  
 
    
    {user?.role==='User'&&<div class="relative z-0 mb-6 w-full group mt-4">
        <div className='grids'>

        </div>
        <Select placeholder={complaints?.type} options={opts}
        onChange={handleSelect}
        value={
            complaints?.type
        }
        className='w-[200px]'
        name="type"
        disabled={
            user?.role==='admin'
        }
      

        
        ></Select>
    </div>}
    
   {user?.role==='committee head'&& <div class="relative z-0 mb-6 w-full group mt-4">
        <Select placeholder={complaints?.status } options={getOptsbyStatus(complaints?.status)}
        name="status"
        onChange={handleSelect}
        value={
            complaints?.status
        }
        className='w-[200px]'
        
      

        
        ></Select>
    </div>}
 
 {user?.role==='User'||user?.role==='committee head'?<Button
 type='submit'
 >
    Update
 </Button>:
 <div
 className='flex justify-center items-center flex-col bg-gray-200 h-64 rounded-xl shadow-md border-2 border-blue-500 mt-6'
 >
<div
className='flex justify-center items-center flex-col '
>
        
      you are not authorized to update this complaint
      <Button 
      onClick={()=>{
          router.push('/')
      }
      }
      className='mt-4'
      >
          Go Back
      </Button>

</div> 
 </div>

 }
</form>
</div>
    
  )
}

export default index