"use client";
import { useState, useEffect, useRef } from "react";
import Navbar from "@/components/Navbar";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import * as THREE from "three";
//@ts-ignore
// import HALO from "vanta/dist/vanta.halo.min";
// import BIRDS from "vanta/dist/vanta.birds.min";
import GLOBE from "vanta/dist/vanta.globe.min";

type Data = {
   children: any;
};
const ClientWrapper = ({ children }: Data) => {
   const [vantaEffect, setVantaEffect] = useState<any>(null);
   const myRef = useRef(null);

   useEffect(() => {
      if (!vantaEffect) {
         setVantaEffect(
            GLOBE({
               el: myRef.current,
               // mouseControls: true,
               // touchControls: true,
               // gyroControls: false,
               // minHeight: 200.0,
               // minWidth: 200.0,
               // scale: 1.0,
               THREE: THREE,
               // zoom: 1,
               // speed: 0.6,
               // blurFactor: 0.15,
               // baseColor: 0xd0d5c,
               // backgroundColor: 0x8105f,

               // color1: 0xabadcd,
               // color2: 0xded7d2,
               // quantity: 5,
               // birdSize: 1,
               // wingSpan: 30,
               // speedLimit: 5,
               // separation: 20,
               // alignment: 20,
               // cohesion: 20,
               // backgroundColor: 0x8105f,

               backgroundColor: 0x23153c,
               color: 0xff3f81,
               color2: 0x75c395,
               size: 1.5,
            })
         );
      }
      return () => {
         if (vantaEffect) vantaEffect.destroy();
      };
   }, [vantaEffect]);
   return (
      <>
         <main className="min-h-screen h-full text-white" ref={myRef}>
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
