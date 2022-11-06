import React from 'react'
import {
    Button,
    Checkbox,
    Label,
    TextInput,
    } from 'flowbite-react'
    import {HiMail} from 'react-icons/hi'
    import Link from 'next/link'

const register = ({}) => {
  return (
    <div className=" px-4  md:w-[60vw] mx-auto  py-2   sm:px-6 lg:px-8">
      <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-100 mb-3 ">Create an Account</h3>
    <form className="">
    <div>
      <div className="mb-2 block">
        <Label
          htmlFor="email2"
          value="Your email"
        />
      </div>
      <input type="email" id="email" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@flowbite.com" required />
      <div className="mb-2 block">
        <Label
          htmlFor="email2"
          value="Roll no"
        />
      </div>
      <TextInput
        id="rno"
        type="text"
        placeholder="Eg: B200729CS"
        required={true}
        shadow={true}
        
      />
      <div className="mb-2 block">
        <Label
          htmlFor="email2"
          value="Department"
        />
      </div>
      <TextInput
        id="email2"
        type="text"
        placeholder="Eg : CSE"
        required={true}
        shadow={true}
        
      />
    </div>
    <div>
      <div className="mb-2 block">
        <Label
          htmlFor="password2"
          value="Your password"
        />
      </div>
      <TextInput
        id="password2"
        type="password"
        required={true}
        shadow={true}
      />
    </div>
    <div>
      <div className="mb-2 block">
        <Label
          htmlFor="repeat-password"
          value="Repeat password"
        />
      </div>
      <TextInput
        id="repeat-password"
        type="password"
        required={true}
        shadow={true}
      />
    </div>
    <div className="flex items-center gap-2">
     
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

export default register