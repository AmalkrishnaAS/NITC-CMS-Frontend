import '../styles/globals.css'

import Head from 'next/head'
import Navbar from '../components/Navbar'
import {useState,useEffect } from 'react'
import {
  createAvatar
} from '@dicebear/avatars'
import  * as style from '@dicebear/avatars-bottts-sprites';
import {useRouter} from 'next/router'

 
function MyApp({ Component, pageProps }) {

  const router = useRouter()
  

  const [user, setUser] = useState(null)
  const login=()=>{
    setUser ({
      email: 'john@nitc.ac.in',
      admin: true,
      avatar:null,
      rollno: 'B200729CS',
      department: 'CSE',
      joined: '2021-05-12',  //return as date stiring from backend

    })
    setUser((prev) => {
      return {
        ...prev,
        avatar: createAvatar(style, {
          seed: prev.rollno,
          dataUri: true,
        }),
      }
    }

    )
  }
  const logout=()=>{
    setUser(null)
  }


  return ( 
    <>
   
<Navbar
user={user}
login={login}
logout={logout}
setUser={setUser}


/>


   
  <Component user={user} {...pageProps} />
  </>

  )  
}


export default MyApp
