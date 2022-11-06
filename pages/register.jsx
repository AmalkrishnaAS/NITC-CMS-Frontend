import React from 'react'
import {
    Button,
    Checkbox,
    Label,
    TextInput,
    } from 'flowbite-react'
    import {HiMail} from 'react-icons/hi'
    import Link from 'next/link'

const register = () => {
  return (
    <div className="  flex flex-col items-center justify-center min-h-screen  py-2 -mt-6  sm:px-6 lg:px-8">
    <form className="flex flex-col gap-4">
    <div>
      <div className="mb-2 block">
        <Label
          htmlFor="email2"
          value="Your email"
        />
      </div>
      <TextInput
        id="email2"
        type="email"
        placeholder="name@flowbite.com"
        required={true}
        shadow={true}
        
      />
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
    <Button type="submit">
      Register new account
    </Button>
  </form>
    </div>
  )
}

export default register