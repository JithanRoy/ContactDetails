import React from 'react'
import { AiOutlineTool, AiFillDelete } from "react-icons/ai";
import { RiFileEditFill } from "react-icons/ri";
import { Routes, Router, Link } from 'react-router-dom';


const Users = ({contactList}) => {
  return (
    <div>
      <div className='h-30 w-30 border-gray-400 p-5 bg-slate-500 grid grid-cols-1 lg:grid-cols-2 gap-2 rounded m-' >
        {contactList.length > 0 ? (
          contactList.map((item) => (
            <div className='flex border-indigo-700 bg-indigo-200 p-5 rounded'> 
              <div>
                <div className='text-lg font-semibold'>
                  Name: {item.name} 
                </div>

                <div className='text-sm font-thin'> 
                  Email: {item.email}
                </div>

                <div className='text-sm font-thin' >
                    Address: {item.address}
                </div>
            </div>
            <div className='flex flex-col m-2'>
              <Link className='float-right text-2xl' to={"/Edit"} > <RiFileEditFill/> </Link>
              <Link className='float-right text-2xl gap-2 pt-1' to={"/Delete"} > <AiFillDelete/> </Link>
            </div>
          </div>
        ))
      ):(
       <div>No user added</div>
      )}
      </div>
    </div>
  )
}

export default Users