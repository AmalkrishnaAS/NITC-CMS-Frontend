import React from 'react'
import { Avatar } from 'flowbite-react'
import {getAvatar} from '../fns'

const CommentTable = ({commentList}) => {
  return (
    <table className='w-full' >
                <tbody>
               {
                 commentList?.map(comment => (
                  <tr className='border-y-[1px] '>
                  <td>
                  <div className="bg-white rounded-lg shadow-lg p-4">
                  <div className="flex items-center justify-between">
                  <div className="flex items-center">
                {/* <div className="h-10 rounded-full bg-blue-800 w-10 mr-4 flex items-center justify-center text-white">
                  {comment.user[0].toUpperCase()}

                </div> */}
             <img
                className='h-10 rounded-full bg-gray-800 w-10 mr-4 flex items-center justify-center text-white'
                src={getAvatar(comment.email)}
                alt="Jese image"
                />
                  <div className="text-sm">
                  <div className="text-gray-900 leading-none">
                  <span className="font-bold capitalize">{comment.user}</span>
                  <span className="text-gray-600"> {'@'+comment.designation}</span>
                  </div>
                  <div className="text-gray-600">
               
                  </div>
                  </div>
                  </div>
                  <div className="-mt-4 flex items-center">
                
                 
                  </div>
                  </div>
                  <div className="flex-1 px-4 py-2 text-gray-700">
                  <div>
                  {comment.comment}
  
                  </div>
                  </div>
                  </div>
                  </td>
                 
                  </tr>
                  
                  ))

               }
                </tbody>

                </table>
  )
}

export default CommentTable