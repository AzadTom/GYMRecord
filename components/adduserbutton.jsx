"use client";

import { useState } from "react";
import { AddUserForm } from "./adduserform";

export const AddUser = () => {


  const [form, setForm] = useState(false);


  const openUserForm = () => {

    setForm(!form);

  }



  return (
    <>
      {!form && <div className="sticky bottom-0 sm:fixed  sm:right-8 sm:bottom-8  mx-4 my-2">
        <button onClick={openUserForm} className="text-right w-full sm:w-auto flex items-center  gap-1 bg-gray-800 px-4 py-2 hover:border hover:border-blue-600 active:focus:border-white">
          <span className="text-2xl">+</span>
          <span>ADD USER</span>
        </button>
      </div>}
      {form && <AddUserForm  openUserForm={()=> openUserForm()} />}
    </>
  )

}