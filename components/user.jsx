"use client";

import { useRouter } from "next/navigation";

export const User = ({ user }) => {

    const { rollno, name, gender, fees, year } = user;

    const router = useRouter();
    
    return (
        <>
            <div className="grid grid-cols-3 bg-black text-white font-semibold tracking-widest border border-white">
                <span className="col-span-1 bg-red-600 p-4 text-center ">{rollno}</span>
                <span className="col-span-2 bg-green-600  p-4  text-center ">{name}</span>
                <span className="col-span-1 bg-white  text-black p-4 text-center">{gender}</span>
                <span className="col-span-2 bg-red-600 p-4  text-center">{`$${fees}`}</span>
                <span className="col-span-2 bg-green-600 p-4  text-center">{year}</span>
                <span className="col-span-1 bg-black p-4  flex justify-center items-center cursor-pointer" onClick={()=> router.push(`/user/${rollno}/${year}`)} > <img src="/ForwardButton.png" alt="arrow" className="w-[32px] h-full" /> </span>
            </div>
           
        </>
    )


}




