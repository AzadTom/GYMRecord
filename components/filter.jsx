"use client";

import { useEffect, useState } from "react";
import { User } from "./user";

export const FilterUser  = ({users})=>{


  

  const[userContent,setUserContent]= useState([]);

  const [filter,setFilter]= useState(false);

  const[query,setQuery] = useState("All year");

  const uniqueYears = Array.from(new Set(users.map((user)=>(user.year))));
  

   const onFilter  = (year)=>{


    if(year)
    {
      const filterdata = users.filter((user)=>(user.year == year));
      setUserContent(filterdata);
      setQuery(year);
      setFilter(false);
    }
    else
    {
       setUserContent(users);
       setQuery("All year");
       setFilter(false);
    }
    
    
    
   }


   useEffect(()=>{


    setUserContent(users);

   },[users])


   

   return(
    <>
    <div className="flex flex-col items-center justify-center w-full">
      
      <div className="flex justify-end max-w-[1000px] w-full px-4 py-2">
        <div className="relative flex justify-end">
        <button className="bg-white text-black px-4 py-1" onClick={()=> setFilter(!filter)}>{query} &#9660;</button>
         {filter && <div className="absolute  top-8 w-full bg-white text-black px-2 py-1 text-center cursor-pointer">
           <h2 onClick={()=> onFilter()}>All year</h2>
           {uniqueYears && uniqueYears.map((year,index)=>( <h2 key={year+index} onClick={()=> onFilter(year)}>{year}</h2> ))}
         </div>}
        </div>
      </div>
      <div className="grid  gap-4 px-4  grid-cols-1 sm:grid-cols-2 md:grid-cols-3 max-w-[1000px] w-full">{userContent && Array.isArray(userContent) && userContent.map((user)=>(<User key={user.rollno+user.year} user={user} />))}</div>
   </div> 
    </>
   )
 
 }


