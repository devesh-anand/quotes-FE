"use client";
import { useState, useEffect, useRef } from "react";
import Navbar from "@/components/Navbar";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import * as THREE from "three";
//@ts-ignore
import HALO from "vanta/dist/vanta.halo.min";

type Data = {
   children: any;
};
const ClientWrapper = ({ children }: Data) => {
   const [vantaEffect, setVantaEffect] = useState<any>(null);
   const myRef = useRef(null);

   // useEffect(() => {
   //    if (!vantaEffect) {
   //       setVantaEffect(
   //          HALO({
   //             el: myRef.current,
   //             THREE: THREE,
   //             zoom: 1,
   //             speed: 0.6,
   //             blurFactor: 0.15,
   //             baseColor: 0xd0d5c,
   //             backgroundColor: 0x8105f,
   //          })
   //       );
   //    }
   //    return () => {
   //       if (vantaEffect) vantaEffect.destroy();
   //    };
   // }, [vantaEffect]);
   return (
      <>
         <main
            className="min-h-screen h-full text-white bg-blue-900"
            ref={myRef}
         >
            <Navbar />
            <div className="flex flex-col items-center pt-16">{children}</div>
            <ToastContainer
               position="bottom-left"
               autoClose={5000}
               hideProgressBar={false}
               newestOnTop={false}
               closeOnClick
               rtl={false}
               pauseOnFocusLoss
               draggable
               pauseOnHover
               theme="colored"
            />
         </main>
      </>
   );
};

export default ClientWrapper;
