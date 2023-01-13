import React from "react";

type Quote = {
   id: number;
   quote: string;
   author: string;
   sub_by: string;
   date: string;
   active: number;
};

const Card = ({ id, quote, author, sub_by, date, active }: Quote) => {
   return (
      <div className="my-8 card w-72 md:w-[480px] border-2 text-primary-content">
         <div className="card-body">
            {/* <h2 className="card-title">Card title!</h2> */}
            <p>{quote}</p>
            <div className="card-actions justify-end">
               <h3 className="italic">- {author}</h3>
            </div>
         </div>
      </div>
   );
};

export default Card;
