"use client";

import { useState } from "react";
import { User } from "./user";

export const FilterUser  = ({users})=>{


  const uniqueYears = Array.from(new Set(users.map((user)=>(user.year))));
  const[userContent,setUserContent]= useState(users);
  const [filter,setFilter]= useState(false);

  

   const onFilter  = (year)=>{


    if(year)
    {
      const filterdata = users.filter((user)=>(user.year == year));
      setUserContent(filterdata);
    }
    else
    {
       setUserContent(users);
    }
    
    
    
   }

   return(
    <>
    <div className="flex flex-col items-center justify-center w-full">
      
      <div className="flex justify-end max-w-[1000px] w-full px-4 py-2">
        <div className="relative flex justify-end">
        <button className="bg-white text-black px-4 py-1" onClick={()=> setFilter(!filter)}> Year &#9660;</button>
         {filter && <div className="absolute  top-8 w-full bg-white text-black px-2 py-1 text-center cursor-pointer">
           <h2 onClick={()=> onFilter()}>All year</h2>
           {uniqueYears && uniqueYears.map((year)=>( <h2 onClick={()=> onFilter(year)}>{year}</h2> ))}
         </div>}
        </div>
      </div>
      <div className="grid  gap-4 px-4  grid-cols-1 sm:grid-cols-2 md:grid-cols-3 max-w-[1000px] w-full">{userContent && Array.isArray(userContent) && userContent.map((user)=>(<User key={user.rollno+user.year} user={user} />))}</div>
   </div> 
    </>
   )
 
 }


