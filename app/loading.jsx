import React from 'react'
import { ButtonLoading } from '@/components/ui/loadingbutton';

function loading() {
  return (
    <div className='flex justify-center items-center w-full h-screen'>
       <ButtonLoading/>        
    </div>
  )
}

export default loading