"use client";

import { useState,useEffect } from "react";
import { User } from "./user";

export const AllUser = ()=>{



    const[users,setUsers]= useState([]);


    useEffect(()=>{

      const getAllUser  =async()=>{

        const response = await fetch("https://script.google.com/macros/s/AKfycbzkaCfJTvj8fh4XNO0XQ7Q41uNNRwvSJnLzoT978v1v8o90jIOAAIi9uPfvKnoc-AVl/exec");
        const users  = await response.json();
        setUsers(users.data);

      }  
      getAllUser();

    },[users])


    return(
        <section className="flex justify-center bg-black">
        <div className="grid  gap-4 px-4  grid-cols-1 sm:grid-cols-2 md:grid-cols-3 max-w-[1000px] w-full">{users && Array.isArray(users) && users.map((user)=>(<User user={user} />))}</div>
        </section>
        )


}