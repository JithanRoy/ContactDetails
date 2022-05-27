import React from 'react'
import { AiOutlineTool, AiFillDelete } from "react-icons/ai";

const Users = ({contactList}) => {
  return (
   <div>
     <div className='h-30 w-30 border-gray-400 p-5 bg-slate-500 grid grid-cols-1 md:grid-cols-2 gap-3 rounded m-' >
     {contactList.length && (
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
                    <button className=''> <AiOutlineTool/> </button>
                    <button className=''> <AiFillDelete/> </button>

        </div>
       ))
     )}
     </div>
   </div>
  )
}

export default Users