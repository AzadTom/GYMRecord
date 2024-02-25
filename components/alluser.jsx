import { FilterUser } from "./filter";

const getAllUser  =async()=>{

  
  const response = await fetch("https://script.google.com/macros/s/AKfycbyEW1ZrwM30iKhEuzc8ihaC5kvc64RzcbAPo1jRJkPaBhqW89ABrlDWvQKrI8NxujBv/exec",{
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



