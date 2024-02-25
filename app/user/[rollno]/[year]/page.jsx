import { UserStatistic } from "./userstatistic";


const getAllUser = async()=>{

  const response = await fetch("https://script.google.com/macros/s/AKfycbyEW1ZrwM30iKhEuzc8ihaC5kvc64RzcbAPo1jRJkPaBhqW89ABrlDWvQKrI8NxujBv/exec",{
    cache:"no-cache"
  });
  const userscontent  = await response.json();
  return userscontent.data;

}

async function Page() {

  
  const users  = await getAllUser();

  return ( <UserStatistic users={users}/>)
}

export default Page;






