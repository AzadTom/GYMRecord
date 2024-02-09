import { UserStatistic } from "./userstatistic";


const getAllUser = async()=>{

  const response = await fetch("https://script.google.com/macros/s/AKfycbzkaCfJTvj8fh4XNO0XQ7Q41uNNRwvSJnLzoT978v1v8o90jIOAAIi9uPfvKnoc-AVl/exec",{
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






