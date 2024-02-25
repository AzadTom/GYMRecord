"use client";

import { useRouter } from "next/navigation";

import { Card ,CardHeader,CardContent ,CardDescription,CardTitle, CardFooter} from "./ui/card";

export const User = ({ user }) => {

    const { rollno, name, gender, fees, year } = user;

    const router = useRouter();
    
    return (
        
        <Card  className="rounded-none">

             <div className="flex justify-between bg-green-600 text-white">
             <CardHeader>
                    <CardTitle>{rollno}.</CardTitle>
                    <CardTitle className="flex flex-col justify-center items-start">
                        <CardDescription className="text-white text-xl sm:text-2xl">{name}</CardDescription>
                     <CardDescription className="bg-red-600 p-1 text-white">{gender}</CardDescription>
                     </CardTitle>
                </CardHeader>
                <CardFooter>
                <span className="col-span-1 bg-black p-4  flex justify-center items-center cursor-pointer" onClick={()=> router.push(`/user/${rollno}/${year}`)} > <img src="/ForwardButton.png" alt="arrow" className="w-[32px] h-full" /> </span>
                </CardFooter>
             </div>
             <CardContent className="flex justify-between px-4 py-2 text-xl font-semibold">
                <span >Rs.{fees}</span>
                <span>{year}</span>
             </CardContent>
               
            </Card>
      
    )


}




