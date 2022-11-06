import React from 'react'
import { Button, Checkbox, Label, TextInput } from 'flowbite-react'
import {HiMail} from 'react-icons/hi'
import Link from 'next/link'
const login = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2 -mt-28 sm:px-6 lg:px-8">
    <form className="flex flex-col gap-4">
  <div>
    <div className="mb-2 block">
      <Label
        htmlFor="email1"
        value="Your email"
      />
    </div>
    <TextInput
      id="email1"
      type="email"
      placeholder="name@flowbite.com"
      required={true}
        shadow={true}
    />
  </div>
  <div>
    <div className="mb-2 block">
      <Label
        htmlFor="password1"
        value="Your password"
      />
    </div>
    <TextInput
      id="password1"
      type="password"
      required={true}
        shadow={true}
    />
  </div>
  <div className="flex items-center gap-2">
    <Checkbox id="remember" />
    <Label htmlFor="remember">
      Remember me
    </Label>
   
   
  </div>
  <Link href={'/register'} legacyBehavior>
      <a className="text-sm text-blue-600 hover:underline font-semibold block">
        Don't have an account? Register
      </a>
    
    </Link>
  <Button type="submit">
    Submit
  </Button>
</form>
</div>
  )
}

export default login