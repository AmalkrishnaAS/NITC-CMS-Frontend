import React from 'react'
import randomAvatar from 'random-avatar'
import { useState } from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'
import { Button } from 'flowbite-react'
const Navbar = ({user,login,logout,isUserOpened,setIsUserOpened}) => {
    const router = useRouter()
    const routes= [
        {
            name: 'Home',
            path: '/',
            function: () => router.push('/')
        },
        {
            name: 'Register',
            path: '/register',
            function: () => router.push('/register')
        },
        {
            name:'Raise a Complaint',
            path:'/create',
            function: () => router.push('/create')
        },
        
        ]

        const userRoutes = [
          
           
            {
                name: 'Logout',
                path: null,
                function: () => {
                    setIsUserOpened(false)
                    router.push('/login')

                    logout()}
            }
        ]




    const [isOpened, setIsOpened] = useState(false)
   
    const toggleMenu = () => {
        setIsOpened(!isOpened)
    }
    const toggleUserMenu = () => {
        setIsUserOpened(!isUserOpened)
    }
  return (
        <nav class="bg-white   border-gray-200 px-2 sm:px-4 py-2.5 rounded dark:bg-gray-900 shadow-md w-full z-1000   ">
  <div class="container flex flex-wrap justify-between items-center mx-auto">
  <a href="https://www.nitc.ac.in" class="flex items-center">
      <img src="/favicon.png" class="mr-3 h-6 sm:h-9" alt="Flowbite Logo" />
      <span class="self-center text-xl font-semibold whitespace-nowrap dark:text-white">NITC-OCS</span>
  </a>
  <div class="flex items-center md:order-2">
      {user?<button onClick={toggleUserMenu}
      type="button" class="flex mr-3 text-sm bg-gray-800 rounded-full md:mr-0 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600 md:mr-4 " id="user-menu-button md:mr-6" aria-expanded="false" data-dropdown-toggle="user-dropdown" data-dropdown-placement="bottom">
        <span class="sr-only">Open user menu</span>
        <img class="w-8 h-8 rounded-full " src={
            user?.avatar
        } alt="user photo z-100" />
      </button>
    :<Button onClick={
        ()=>router.push('/login')
    } className='bg-700'>Login</Button>
      }
      
      <div class={` ${
        isUserOpened ? 'block' : 'hidden'
      } z-100  my-4 text-base list-none bg-white z-500 rounded divide-y divide-gray-100 shadow dark:bg-gray-700 dark:divide-gray-600 absolute  w-40 top-9 md:top-[42px] right-16
      
      `}>
        <div class="py-3 px-4 hover:bg-gray-200 cursor-pointer" onClick={()=>router.push('/profile')}>
          <span class="block text-sm text-gray-900 dark:text-white">{
            //get name from email with first letter capital
           user?.name
          }</span>
          <span class="block text-sm font-medium text-gray-500 truncate dark:text-gray-400">{user?.email}</span>
        </div>
        <ul class="py-1" aria-labelledby="user-menu-button">
            {
                userRoutes.map((route, index) => {
                    return(
                        <li key={index}>
                           <span  onClick={route.function} class=" cursor-pointer flex items-center px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600">
                                <span class="ml-2 text-sm text-gray-700 dark:text-gray-200">{route.name}</span>
                            </span>
                        </li>
                    )
                })
            }
           
         
        </ul>
      </div>
      <button onClick={
            toggleMenu

      } data-collapse-toggle="mobile-menu-2" type="button" class="inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="mobile-menu-2" aria-expanded="false">
        <span class="sr-only">Open main menu</span>
        <svg class="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
    </button>
  </div>
  
  
  <div class={`
  ${isOpened ? 'block' : 'hidden'}
  justify-between items-center w-full md:flex md:w-auto md:order-1 bg-white z-100`} id="mobile-menu-2">
    <ul class="flex flex-col p-4 mt-4 bg-gray-50 rounded-lg border border-gray-100 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
      
        {
            routes.map((route, index) => {
                return(
                    <li key={index}  onClick={route.function} >
                        <p  class="flex items-center px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600">
                            <span class="ml-2 text-sm text-gray-700 dark:text-gray-200">{route.name}</span>
                        </p>
                    </li>
                )
            })
        }
    </ul>
   
  </div>
  
  </div>
  
</nav>



    
  )
}

export default Navbar