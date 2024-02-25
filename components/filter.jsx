"use client";

import { useEffect, useState } from "react";
import { User } from "./user";

import { Input } from "@/components/ui/input"


export const FilterUser  = ({users})=>{


  

  const[userContent,setUserContent]= useState([]);

  const [filter,setFilter]= useState(false);

  const[query,setQuery] = useState("Year");

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
       setQuery("Year");
       setFilter(false);
    }
    
    
    
   }

   const searchData = (query)=>{


     if(isNaN(query))
     {

       const filterdata = users.filter((user)=> user.name == query);
       setUserContent(filterdata);
       return;


     }

     const number  = parseInt(query);

     if(!isNaN(number))
     {

      const filterdata = users.filter((user)=> user.rollno == query);
      setUserContent(filterdata);
      return;


     }
     
     setUserContent(users);
     
   }


   useEffect(()=>{


    setUserContent(users);

   },[users])


   

   return(
    <>
    <div className="flex flex-col items-center justify-center w-full">


        <div className="w-full sm:w-auto px-4 py-2 bg-black text-black flex justify-between">
            <Input type="search" placeholder="Search" onChange={(e)=> searchData(e.target.value)} className="rounded-none"/>


                  <div className="flex justify-center items-center bg-white">
              <div className="relative flex justify-end  items-center gap-1 w-auto">
              <button className="bg-white text-black px-4 py-1 flex justify-between" onClick={()=> setFilter(!filter)}> <span>{query}</span> <span>&#9660;</span></button>
              {filter && <div className="absolute  top-8 w-full bg-white text-black px-2 py-1 text-center cursor-pointer">
                <h2 onClick={()=> onFilter()}>Year</h2>
                {uniqueYears && uniqueYears.map((year,index)=>( <h2 key={year+index} onClick={()=> onFilter(year)}>{year}</h2> ))}
              </div>}
              </div>
            </div>


        </div>

     
      <div className="grid  gap-4 px-4  grid-cols-1 sm:grid-cols-2 md:grid-cols-3 max-w-[1000px] w-full">{userContent && Array.isArray(userContent) && userContent.map((user)=>(<User key={user.rollno+user.year} user={user} />))}</div>
   </div> 
    </>
   )
 
 }


