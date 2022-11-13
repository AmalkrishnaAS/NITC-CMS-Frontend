import "../styles/globals.css";

import Head from "next/head";
import Navbar from "../components/Navbar";
import { useState, useEffect } from "react";
import { createAvatar } from "@dicebear/avatars";
import * as style from "@dicebear/avatars-bottts-sprites";
import { useRouter } from "next/router";
import FooterComp from "../components/Footer";
import {getAvatar} from '../fns'
function MyApp({ Component, pageProps }) {
  const router = useRouter();

  // const getAvatar= (name) => {
  //   return createAvatar(style, {
  //     seed: name,
  //     dataUri: true,
  //   });
  // };

  const [user, setUser] = useState(null);
  const login = () => {
    setUser({
      email: "john@nitc.ac.in",
      role: "admin",
      avatar: null,
      id:"B200729CS",
      department: "CSE",
      joined: "2021-05-12", //return as date stiring from backend
      name: "John Doe",
      fa: "Saleena N",
    });
    setUser((prev) => {
      return {
        ...prev,
        avatar: getAvatar(prev.email),
      };
    });

    router.push("/");
  };
  const logout = () => {
    setUser(null);
    router.push("/login");
  };

  return (
    <>
      <Navbar user={user} login={login} logout={logout} setUser={setUser} />

      <div className=" ">
        <Component {...pageProps} user={user} setUser={setUser}  />

        {/* <FooterComp/> */}
      </div>
    </>
  );
}

export default MyApp;
