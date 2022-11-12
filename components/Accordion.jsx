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
import { HiOutlineTrash, HiOutlinePencilAlt,HiClock } from 'react-icons/hi'
import CommentModal from './CommentModal'
import DeleteModal from './DeleteModal'



const AccordionComp = ({data,setDeleteModal,setCommentModal,comments,commentModal,user,deleteModal}) => {
    
  
   
    data.sort((a,b)=>new Date(b.date)-new Date(a.date));
   
   
  return (
    
    <Accordion arrowIcon={
        HiOutlineArrowCircleDown
    }
    alwaysOpen={true}
    >
        {data.map((item,index)=>{
            return (
                
                <Accordion.Panel >
                     <CommentModal
  commentModal={commentModal}
  setCommentModal={setCommentModal}
  comments={item.comments}
  user={user}
  ></CommentModal>
   <DeleteModal
        deleteModal={deleteModal}
        setDeleteModal={setDeleteModal}
      ></DeleteModal>
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
 
     </div>
        <div className="p-1 mb-2 text-gray-700 dark:text-gray-400 ">
         {item.description}
        </div>
        <div className='flex space-x-4 p-2'>
        <div className=''>
        <HiOutlineTrash className='text-2xl text-red-500 cursor-pointer' onClick={
            ()=>{
                setDeleteModal(true)
            }

        } />
        </div>
        <div className='flex'>
        <HiOutlinePencilAlt  className='text-2xl text-blue-500 cursor-pointer' />
        </div>
        <div className='flex'>
        <HiInformationCircle  className='text-2xl text-yellow-300  cursor-pointer '
        onClick={
            ()=>{
                setCommentModal(true)
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