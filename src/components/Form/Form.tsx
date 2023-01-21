"use client";

import axios from "axios";
import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";

const Form = () => {
   let [quote, setQuote] = useState<string>("");
   let [author, setAuthor] = useState<string>("");
   let [by, setBy] = useState<string>("");

   const submitQuote = async (e: React.MouseEvent<HTMLElement>) => {
      e.preventDefault();

      try {
         if (quote.length && author.length && by.length) {
            let res = await axios.post(
               "https://quotes-be-production.up.railway.app/quote",
               {
                  quote: quote,
                  author: author,
                  sub_by: by,
               }
            );

            if (res.data.status == "error") {
               console.log("error");
               toast(res.data.message);
            } else {
               console.log("submitted");
               toast.success(res.data.message, {
                  position: "bottom-left",
                  autoClose: 5000,
                  hideProgressBar: false,
                  closeOnClick: true,
                  pauseOnHover: true,
                  draggable: true,
                  progress: undefined,
                  theme: "light",
               });

               setQuote("");
               setAuthor("");
               setBy("");
               document.getElementById("form-modal")?.click();
            }
         }
      } catch (e: any) {
         if (e.message)
            toast.error(e.response.data ? e.response.data.message : e.message, {
               position: "bottom-left",
               autoClose: 5000,
               hideProgressBar: false,
               closeOnClick: true,
               pauseOnHover: true,
               draggable: true,
               progress: undefined,
               theme: "light",
            });
      }
   };

   return (
      <div className="text-black">
         <input type="checkbox" id="form-modal" className="modal-toggle" />
         <label htmlFor="form-modal" className="modal cursor-pointer">
            <label
               className="modal-box relative flex flex-col text-center gap-8"
               htmlFor=""
            >
               <h3 className="text-lg font-bold">
                  Submit your quote (Regards, Devesh).
               </h3>

               <textarea
                  placeholder="Type Quote here"
                  className="input input-bordered w-full h-56"
                  onChange={(e) => setQuote(e.target.value)}
                  required
               />

               <div className="form-control">
                  <label className="input-group input-group-vertical">
                     <span>Author (anonymous if none)</span>
                     <input
                        type="text"
                        placeholder="Quote Author"
                        className="input input-bordered"
                        onChange={(e) => setAuthor(e.target.value)}
                     />
                  </label>
               </div>

               <div className="form-control">
                  <label className="input-group input-group-vertical">
                     <span>Submitted By</span>
                     <input
                        type="text"
                        placeholder="Your Name"
                        className="input input-bordered"
                        onChange={(e) => setBy(e.target.value)}
                        required
                     />
                  </label>
               </div>

               <button
                  onClick={submitQuote}
                  className="btn btn-outline btn-primary"
               >
                  Submit
               </button>
            </label>
         </label>
      </div>
   );
};

export default Form;
