"use client";

import { useParams } from 'next/navigation';
import React, { useState ,useEffect} from 'react'

function Page() {

  
  
  const params = useParams();

  const[user,setUser] = useState([]);

  const [users,setUsers]= useState([]);

    
    useEffect(()=>{

      const getAllUser  =async()=>{
        
        const response = await fetch("https://script.google.com/macros/s/AKfycbzkaCfJTvj8fh4XNO0XQ7Q41uNNRwvSJnLzoT978v1v8o90jIOAAIi9uPfvKnoc-AVl/exec");
        const userscontent  = await response.json();

        setUsers(await userscontent.data);
        const currentuser = users.filter((user)=> user.rollno == params.rollno && user.year == params.year);
        setUser(currentuser);

      }  
      getAllUser();
      

    },[users])


  

  return (
    <div>
      {user.length > 0 && <div className='px-4 py-2 m-4 bg-white text-black flex gap-2 sm:gap-4 justify-between sm:text-xl text-xs'>
          <h2>{user[0].rollno}</h2>
          <h2>{user[0].name}</h2>
          <h2>{user[0].gender}</h2>
          <h2>{user[0].fees}</h2>
          <h2>{user[0].year}</h2>
      </div>}
      {user.length >0 && <div className='grid gap-4 px-4 py-2  grid-cols-1 sm:grid-cols-2 md:grid-cols-3'>
        {Object.keys(user[0]).slice(5).map((key,index)=>(<Month  key={key+index} user={user[0]} currentkey={key} index={index} rollno={user[0].rollno} fees={user[0].fees}/>))}
      </div> }
    </div>
  )
}

export default Page;




const Month = ({currentkey,index,user,rollno,fees}) => {

  const [loading,setLoading] = useState(false);
  const [amount,setAmount] = useState("");

 
  const handlefees = async (event) => {


      event.preventDefault();

      setLoading(true);

      try {

          
      const year = new Date().getFullYear();            
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
         

      }
      else {
          console.log(response);
      }
          
      } catch (error) {
          
          console.log(error);
      }

  }


 


  return (
      <li className=" border border-white px-4 py-4 flex flex-col gap-1">
          <h2 className="flex justify-between"><span>{currentkey}</span></h2>
          <span>{user[currentkey]}</span>
          {!user[currentkey] && <form onSubmit={handlefees} className="flex flex-col gap-1 sm:gap-2" id="month">    
              {!loading && <>
                <input type="text" className="px-4 py-2 text-black w-full" placeholder={fees} name="amount" value={amount} onChange={(e)=> setAmount(e.target.value)}  required />
              <button className="bg-white text-black p-1" type="submit">submit</button>
              </>}
          </form>}
          {loading &&<h2 className='w-full px-4 py-2 text-center'>Loading</h2> }
      </li>
  )

}