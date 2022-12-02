import "../styles/globals.css";

import Head from "next/head";
import Navbar from "../components/Navbar";
import { useState, useEffect } from "react";
import { createAvatar } from "@dicebear/avatars";
import * as style from "@dicebear/avatars-bottts-sprites";
import { useRouter } from "next/router";
import FooterComp from "../components/Footer";
import { getAvatar } from "../lib/fns";
import {toast} from 'react-toastify'
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function MyApp({ Component, pageProps }) {
  const [isUserOpened, setIsUserOpened] = useState(false)
const router = useRouter();
  

  // const getAvatar= (name) => {
  //   return createAvatar(style, {
  //     seed: name,
  //     dataUri: true,
  //   });
  // };

  const [user, setUser] = useState(null);

  useEffect(() => {
    const curr=localStorage.getItem('user')
    if(curr){
      setUser(JSON.parse(curr))
      setUser((prev)=>({...prev,avatar:getAvatar(prev.email)}))
    }
  }, []);
  
  const logout = () => {
    setUser(null);
    localStorage.removeItem("user");
    localStorage.removeItem("token");
    setIsUserOpened(false)
    router.push("/login");

  };

  return (
    <>
    <ToastContainer/>
    
      <Navbar user={user}  logout={logout} setUser={setUser}
      setIsUserOpened={setIsUserOpened}
      isUserOpened={isUserOpened}
      />

      <div className=" ">
        <Component {...pageProps} user={user} setUser={setUser} logout={
          logout
        }
        setIsUserOpened={setIsUserOpened}
        isUserOpened={isUserOpened}
        />

        {/* <FooterComp/> */}
      </div>
    </>
  );
}

export default MyApp;
