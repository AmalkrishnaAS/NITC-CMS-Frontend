import React from 'react'
import { Button, Checkbox, Label, TextInput } from 'flowbite-react'
import {HiMail} from 'react-icons/hi'
import Link from 'next/link'
const login = () => {
  return (
    <section class="  md:py-6 bg-[url('/nitcjpg.jpg')]  bg-cover md:h-[92vh] sm:h-[92vh] h-[92vh] overflow-y-hidden  overflow-hidden">
    <div class="flex flex-col items-center justify-center px-6 py-8 mx-auto  lg:py-0">
      
        <div class="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
            <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
                <h1 class="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                    Sign in to your account
                </h1>
                <form class="space-y-4 md:space-y-6" action="#">
                    <div>
                        <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
                        <input type="email" name="email" id="email" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@company.com" required={true} />
                    </div>
                    <div>
                        <label for="password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                        <input type="password" name="password" id="password" placeholder="••••••••" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required={true} />
                    </div>
                    <div class="flex items-center justify-between">
                        <div class="flex items-start">
                            <div class="flex items-center h-5">
                              <input id="remember" aria-describedby="remember" type="checkbox" class="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800"  />
                            </div>
                            <div class="ml-3 text-sm">
                              <label for="remember" class="text-gray-500 dark:text-gray-300">Remember me</label>
                            </div>
                        </div>
                      
                    </div>
                   <Button
                   className='w-full'
                   >
                        Sign in
                   </Button>
                   <Link href={'/register'}>
                   <div class="text-sm font-light text-gray-500 dark:text-gray-400 mt-2">
                        Don’t have an account yet? <span  class="font-medium text-primary-600 hover:underline dark:text-primary-500">Sign up</span>
                    </div>
                   </Link>
                   
                    
                </form>
            </div>
        </div>
    </div>
  </section>
  )
}

export default login