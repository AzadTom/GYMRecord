"use client";
import { useParams } from "next/navigation";
import { useRouter } from "next/navigation";
import { useState } from "react";

export const UserStatistic = ({users})=>{

    const params  = useParams();

    const user  = users.filter((user)=> (user.rollno == params.rollno && user.year == params.year));

    return( <Individual user={user[0]}/> )

}



const Individual =({user})=>{



    return(
        <div>
      {user && <div className='px-4 py-2 m-4 bg-white text-black flex gap-2 sm:gap-4 justify-between sm:text-xl text-xs'>
          <h2>{user.rollno}</h2>
          <h2>{user.name}</h2>
          <h2>{user.gender}</h2>
          <h2>Rs.{user.fees}</h2>
          <h2>{user.year}</h2>
      </div>}
      {user && <div className='grid gap-4 px-4 py-2  grid-cols-1 sm:grid-cols-2 md:grid-cols-3'>
        {Object.keys(user).slice(5).map((key,index)=>(<Month  key={key+index} user={user} currentkey={key} index={index} rollno={user.rollno} fees={user.fees} year={user.year}/>))}
      </div> }
    </div>
    )

}



const Month = ({currentkey,index,user,rollno,fees,year}) => {

    const [loading,setLoading] = useState(false);
    const [amount,setAmount] = useState("");

    const router  = useRouter();
  
    const handlefees = async (event) => {
  
  
        event.preventDefault();
  
        setLoading(true);
  
        try {
  
            
                
        const data = new FormData();
        data.append("rollno",rollno);
        data.append("year",year);
        data.append("index",index+5);
        data.append("amount",amount);
  
       
        const response = await fetch("https://script.google.com/macros/s/AKfycbxcXEFcFWZAZnDekmpT95z2pM0qvsCbw88wU-hH_rhFf33dzu3iKpvkEhVfgxHZQ2Cl/exec", {
            method: "POST",
            body: data
        });
  
        if (response.ok) {
  
            setLoading(false);
            router.refresh();

        }
        else {
            console.log(response);
        }
            
        } catch (error) {
            
            console.log(error);
        }
  
    }
  
  
   
  
  
    return (
        <li className="bg-white text-black px-4 py-4 flex flex-col gap-1">
            <h2 className="flex justify-between text-xs sm:text-xl"><span>{currentkey}</span></h2>
            <span className='text-xs sm:text-xl font-semibold'>{user[currentkey] && `Rs.${user[currentkey]}`}</span>
            <span>{user[currentkey] && (fees - user[currentkey]) > 0 && `Rs.${(fees - user[currentkey])}`}</span>
            {!user[currentkey] && <form onSubmit={handlefees} className="flex flex-col gap-1 sm:gap-2 " id="month">    
                {!loading && <>
                  <input type="text" className="px-2 py-1 sm:px-4 sm:py-2 text-black border border-black w-full text-xs sm:text-xl" placeholder={fees} name="amount" value={amount} onChange={(e)=> setAmount(e.target.value)}  required />
                <button className="bg-black text-white p-1 text-xs sm:text-xl" type="submit">submit</button>
                </>}
            </form>}
            {loading &&<h2 className='w-full px-4 py-2 text-center text-xs sm:text-xl'>Loading</h2> }
        </li>
    )
  
  }