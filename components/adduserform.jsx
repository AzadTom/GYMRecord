"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";

export const AddUserForm = ({openUserForm}) => {

    const[loading,setLoading] = useState(false);

    const router  = useRouter();

    const handleSubmitForm = async(e)=>{

        e.preventDefault();

        try {

            
        setLoading(true);

        const form = document.querySelector("#insert");

        const data  = new FormData(form);
        
        const response  = await fetch("https://script.google.com/macros/s/AKfycbyEW1ZrwM30iKhEuzc8ihaC5kvc64RzcbAPo1jRJkPaBhqW89ABrlDWvQKrI8NxujBv/exec",{
            method:"POST",
            body:data,
        });

        if(response.ok)
        {
            
            setLoading(false);
            openUserForm();
            router.refresh();
           
        }
        else
        {
            console.log("data insertion is failed!");

        }
            
        } catch (error) {
            
            console.log(error.message);
        }

    }


    return (
        <>
            {<div className="bg-white text-black p-4 flex flex-col gap-4  fixed bottom-0 left-0 right-0">

                <div className="flex justify-end  font-semibold">
                    
                    <button className="border border-black px-4 py-1" onClick={openUserForm}>Cancel</button>
                </div>

                <form className="grid   gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3" onSubmit={handleSubmitForm} id="insert">

                    <div className="flex flex-col gap-1">
                        <label htmlFor="rollno">Roll no.</label>
                        <input type="text" placeholder="121" id="rollno" name="rollno" required className="px-4 py-2 border border-black" />
                    </div>

                    <div className="flex flex-col gap-1">
                        <label htmlFor="name">Name</label>
                        <input type="text" placeholder="jack" id="name" name="name" required className="px-4 py-2 border border-black" />
                    </div>

                    <div className="flex flex-col gap-1">
                        <label htmlFor="gend
                        er">Gender</label>
                        <input type="text" placeholder="Male" id="gender" name="gender" required className="px-4 py-2 border border-black" />
                    </div>

                    <div className="flex flex-col gap-1">
                        <label htmlFor="fees">Fees</label>
                        <input type="text" placeholder="$3000" id="fees" name="fees" required className="px-4 py-2 border border-black" />
                    </div>

                    <div className="flex flex-col gap-1">
                        <label htmlFor="year">Name</label>
                        <input type="text" placeholder="2024" id="year" name="year" required className="px-4 py-2 border border-black" />
                    </div>


                    <button type="submit" className="bg-black text-white px-4 py-2 self-end">{loading ? "Loading":"Submit"}</button>




                </form>
            </div>}
        </>)

}