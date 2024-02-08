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
      {!form && <div className="fixed right-4 bottom-4">
        <button onClick={openUserForm} className="flex items-center  gap-1 bg-gray-800 px-4 py-2 hover:border hover:border-blue-600 active:focus:border-white">
          <span className="text-2xl">+</span>
          <span>ADD USER</span>
        </button>
      </div>}
      {form && <AddUserForm  openUserForm={()=> openUserForm()} />}
    </>
  )

}