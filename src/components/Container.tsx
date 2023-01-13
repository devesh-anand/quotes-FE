import React from "react";
import axios from "axios";
import Card from "./Card";

type Quote = {
   id: number;
   quote: string;
   author: string;
   sub_by: string;
   date: string;
   active: number;
};

const Container = async () => {
   const quotes = await getQuotes();
   console.log(quotes);
   return (
      <div>
         {quotes.length &&
            quotes.map((q: Quote) => {
               return (
                  <Card
                     key={q.id}
                     id={q.id}
                     quote={q.quote}
                     author={q.author}
                     sub_by={q.sub_by}
                     date={q.date}
                     active={q.active}
                  />
               );
            })}
      </div>
   );
};

async function getQuotes() {
   const res = await fetch(
      "https://quotes-be-production.up.railway.app/quotes",
      { next: { revalidate: 60 } }
   );

   return res.json();
}

export default Container;
