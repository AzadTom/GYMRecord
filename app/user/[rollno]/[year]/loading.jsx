import React from 'react'

function loading() {
  return (
    <div className='flex justify-center items-center w-full h-screen'>

       <div>
         <img src="/loader.gif" alt="loader"  width={250} height={250}/>
        </div> 
        
    </div>
  )
}

export default loading