"use client";
import { useState, useEffect, useRef } from "react";
import Navbar from "@/components/Navbar";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

type Data = {
   children: any;
};
const ClientWrapper = ({ children }: Data) => {
   return (
      <>
         <main className="min-h-screen text-white bg-gradient-to-r from-blue-800 to-blue-500">
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
