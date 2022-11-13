import React from "react";
import {HiTrash,
  HiCheckCircle

} from 'react-icons/hi'
import { useEffect } from "react";
import axios from "axios";
import { useState } from "react";
import {getAvatar} from '../fns'
const UsersTable = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/pending_reqs')
    .then(res => {
      console.log(res.data)
      setUsers(res.data)
    }
    )
  
  
  }, [])
  
  return (
    <table class=" w-full text-sm text-left text-gray-500 dark:text-gray-400">
      <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
        <tr>
          <th scope="col" class="py-3 px-6">
            Name
          </th>
          <th scope="col" class="py-3 px-6">
            Position
          </th>

          <th scope="col" class="py-3 px-6">
            Action
          </th>
        </tr>
      </thead>
      <tbody>
      {users.map((item,key)=>  <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
          <th
            scope="row"
            class="flex items-center py-4 px-6 text-gray-900 whitespace-nowrap dark:text-white"
          >
            <img
              class="w-10 h-10 bg-gray-800 rounded-full"
              src={getAvatar(item?.email)}
              alt="Jese image"
            />
            <div class="pl-3">
              <div class="text-base font-semibold">{item?.name}</div>
              <div class="font-normal text-gray-500">
                {item?.email}
              </div>
            </div>
          </th>
          <td class="py-4 px-6">{item?.designation}</td>

          <td class="py-4 px-6">
           
            <div className="flex space-x-3">
              <HiCheckCircle className="text-green-500 sm:h-6 sm:w-6 cursor-pointer" />
              <HiTrash className="text-red-500 sm:h-6 sm:w-6 cursor-pointer" />

            </div>
            
          
          </td>
        </tr>)}
      </tbody>
    </table>
  );
};

export default UsersTable;
