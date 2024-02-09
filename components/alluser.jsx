import { FilterUser } from "./filter";

const getAllUser  =async()=>{

  
  const response = await fetch("https://script.google.com/macros/s/AKfycbzkaCfJTvj8fh4XNO0XQ7Q41uNNRwvSJnLzoT978v1v8o90jIOAAIi9uPfvKnoc-AVl/exec",{
    cache:"no-cache"
  });
  const users  = await response.json();
  return users.data;
  
} 



export const AllUser = async()=>{

    const users  = await getAllUser();

   
    return(
        <section className="flex flex-col  items-center justify-center bg-black">
         <FilterUser users={users} />
        </section>
        )


}



