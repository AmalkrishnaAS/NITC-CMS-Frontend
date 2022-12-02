import React from 'react'
import {Accordion,Badge} from 'flowbite-react'
import { useState } from 'react'
import {
    HiOutlineArrowCircleDown,HiCheck
} from  'react-icons/hi'
import {
    HiBookOpen,HiInformationCircle
}
from 'react-icons/hi'
//import delete and edit icons
import { HiOutlineTrash, HiOutlinePencilAlt,HiClock,HiChat } from 'react-icons/hi'
import CommentModal from './CommentModal'
import DeleteModal from './DeleteModal'
import { useRouter } from 'next/router'
import axios from 'axios'
import { toast } from 'react-toastify'
import {HiLocationMarker} from 'react-icons/hi'


const AccordionComp = ({data,setDeleteId,deleteId,selectedData,setSelectedData,user,getAvatar,setAllData}) => {
    const router = useRouter()
    const deleteComplaint=async (id)=>{
        console.log(id)
        console.log(`complaint ${id} `)
      const  res=await axios.delete(`http://localhost:5000/complaint/${id}`,
        {
            headers:{
                'x-access-token':localStorage.getItem('token')
            }
        }
        )
        console.log(res)

        //update local data after deleting
       
        setDeleteModal(false)

    }
    
  
   
    data.sort((a,b)=>new Date(b.date)-new Date(a.date));
   
   
   
  return (
    
    <Accordion arrowIcon={
        HiOutlineArrowCircleDown
    }
    alwaysOpen={true}
    >
        {data.map((item,index)=>{
            console.log(item.id)

            return (
                
                <Accordion.Panel >
                     {/* <CommentModal
  commentModal={commentModal}
  setCommentModal={setCommentModal}
  comments={item.comments}
  user={user}
  getAvatar={getAvatar}
  item={item}
  ></CommentModal> */}
   {/* <DeleteModal
        deleteModal={deleteModal}
        setDeleteModal={setDeleteModal}
        deleteComplaint={deleteComplaint}
        id={item.id}
        
      ></DeleteModal> */}
      <Accordion.Title className='w-full'>
      <div className='p-3 flex'>
        <div className='flex'>
            <div className='text-lg font-semibold'>{item.title}</div>
            </div>
            
      
      </div>
      
       
     
            
        

      
      </Accordion.Title>
      <Accordion.Content>
        
     <div className="badges flex space-x-3 my-4">
    
    <Badge icon={HiClock}
       className='text-blue-800 bg-blue-100 text-sm sm:text-md '
        >
            
    <span 
    className='p-2'
    >
        {item.status}

    </span>
    </Badge>
    <Badge icon={HiBookOpen}
       className='text-sm text-blue-800 sm:text-md'
        >
        
            
    <span 
    className='p-2'
    >
         {
                item.type
            }
    </span>
    </Badge>
    <Badge icon={HiLocationMarker}
       className='text-sm text-blue-800 sm:text-md'
        >
        
            
    <span 
    className='p-2'
    >
         {
                item?.location
            }
    </span>
    </Badge>
 
     </div>
        <div className="p-1 mb-2 text-gray-700 dark:text-gray-400 ">
         {item.description}
        </div>
        <div className='flex space-x-4 p-2'>
        <div className=''>
       {user?.role==='User'&&item.status==='Open'&& <HiOutlineTrash className='text-2xl text-red-500 hover:translate-y-[-1.5px] cursor-pointer' onClick={
            ()=>{

                if(item.status!=='Open'){
                    toast.error('You can only delete open complaints')
                }
                else{
                setDeleteId(item.id)
                }
            }

        } />}
        </div>
        <div className='flex'>
        <HiOutlinePencilAlt  className='text-2xl text-blue-500 hover:translate-y-[-1.5px]  cursor-pointer' onClick={
            ()=>{

                if(user?.role==='User'&&item.status!=='Open'){
                    toast.error('You can only edit open complaints')
                }
                else{
                router.push(`update/${item.id}`)
                }
            }
        } />
        </div>
        <div className='flex'>
        <HiChat  className='text-2xl text-blue-500 hover:translate-y-[-1.5px]   cursor-pointer '
        onClick={
            ()=>{
                setSelectedData(item)
            }

        }
        />
        </div>
        </div>
      </Accordion.Content>
    </Accordion.Panel>
    
            )
        }
        )}
    
  </Accordion>
  )
}

export default AccordionComp