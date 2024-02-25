"use client";
import { useParams } from "next/navigation";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";


import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { ButtonLoading } from "@/components/ui/loadingbutton";

export const UserStatistic = ({users})=>{

    const params  = useParams();

    const user  = users.filter((user)=> (user.rollno == params.rollno && user.year == params.year));

    return( <Individual user={user[0]} fees={user[0].fees}/> )

}



const Individual =({user,fees})=>{




    const [balanceDue,setBalanceDue] = useState(0);

    const getBalanceDue = ()=>{

        let balance =0;

       Object.keys(user).slice(5).map((key)=>{

            if(user[key])
            {
               balance += fees - parseInt(user[key]);
            }
            
       })

     
       setBalanceDue(balance);

    
       
   }

    useEffect(()=>{

        getBalanceDue();

    },[])


    return(
        <div>
      {user && <div className='rounded-lg px-4 py-2 m-4 bg-white text-black flex gap-2 sm:gap-4 justify-between sm:text-xl text-xs'>
          <h2>{user.rollno}</h2>
          <h2>{user.name}</h2>
          <h2>{user.gender}</h2>
          <h2>Rs.{user.fees}</h2>
          <h2>{user.year}</h2>
      </div>}

       {balanceDue > 0 && <div className="flex justify-end px-4  text-black">
            <button className="bg-white p-2 rounded-lg text-xs sm:text-sm font-semibold">Due:<span>Rs.{balanceDue}</span> </button>
        </div> }   
      {user && <div className='grid gap-4 px-4 py-2  grid-cols-1 sm:grid-cols-2 md:grid-cols-3'>
        {Object.keys(user).slice(5).map((key,index)=>(<Month  key={key+index} user={user} currentkey={key} index={index} rollno={user.rollno} fees={user.fees} year={user.year} getBalanceDue={()=> getBalanceDue()}/>))}
      </div> }
    </div>
    )

}



const Month = ({currentkey,index,user,rollno,fees,year ,getBalanceDue}) => {

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
  
       
        const response = await fetch("https://script.google.com/macros/s/AKfycbyEW1ZrwM30iKhEuzc8ihaC5kvc64RzcbAPo1jRJkPaBhqW89ABrlDWvQKrI8NxujBv/exec", {
            method: "POST",
            body: data
        });
  
        if (response.ok) {
  
            setLoading(false);
            router.refresh();
            getBalanceDue();

        }
        else {
            console.log(response);
        }
            
        } catch (error) {
            
            console.log(error);
        }
  
    }
  
  
   
  
  
    return (
        <Card>
            <CardHeader className="pb-2">
                <CardTitle className="text-sm sm:text-xl">{currentkey.toUpperCase()}</CardTitle>
                <CardDescription className="font-semibold text-black">{user[currentkey] && `Rs.${user[currentkey]}`}</CardDescription>
                <CardDescription>{user[currentkey] && (fees - user[currentkey]) > 0 && `Rs.${(fees - user[currentkey])}`}</CardDescription>
            </CardHeader>
            <CardContent>
            {!user[currentkey] && <form onSubmit={handlefees} className="flex flex-col gap-1 sm:gap-2 " id="month">    
                {!loading && <>
                <Input id="amount" placeholder={fees} name="amount" value={amount} onChange={(e)=> setAmount(e.target.value)}  required />
                <Button type="submit">Submit</Button>
                </>}
            </form>}
            {loading &&<ButtonLoading/> }
            </CardContent> 
        </Card>
    )
  
  }