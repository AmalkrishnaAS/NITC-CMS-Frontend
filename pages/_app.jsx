import '../styles/globals.css'

import Head from 'next/head'
import Navbar from '../components/Navbar'
import {useState,useEffect } from 'react'
import {
  createAvatar
} from '@dicebear/avatars'
import  * as style from '@dicebear/avatars-bottts-sprites';
import {useRouter} from 'next/router'
import  FooterComp  from '../components/Footer'
function MyApp({ Component, pageProps }) {
  
  

  const router = useRouter()
  

  const [user, setUser] = useState(null)
  const login=()=>{
    setUser ({
      email: 'john@nitc.ac.in',
      role:'student',
      avatar:null,
      rollno: 'B200739CS',
      department: 'CSE',
      joined: '2021-05-12',//return as date stiring from backend
      name:'John Doe',
      fa:'Saleena N'

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


   <div className=' '>
      <Component {...pageProps} user={user} setUser={setUser} />
  
  
  {/* <FooterComp/> */}
  </div>
  </>
  )  
}


export default MyApp
