import React from 'react'
import { Link } from 'react-router-dom';
import {AiFillDelete} from "react-icons/ai";
import {RiFileEditFill} from "react-icons/ri";


const UsersLoad = (props) => {

  return (
    <div className='border-gray-400 p-5 bg-slate-500 rounded'>
        <Link className='text-2xl mb-4 block text-white' to={"/adduser"} >Add User</Link>
        <div className='h-30 w-30 grid grid-cols-2 lg:grid-cols-3 gap-2'>
            
            {props.users.length > 0 ? (
                props.users.map((item) => (
                <div key={item.id} className='flex justify-around border-indigo-700 bg-indigo-200 p-5 rounded'> 
                    <div className=' '>
                        <div className='text-lg font-semibold'>
                            Name: {item.name} 
                        </div>

                        <div className='text-sm font-thin'> 
                            Email: {item.email}
                        </div>

                        <div className='text-sm font-thin' >
                            Address: {item.address.city}
                        </div>
                    </div>
                    <div className='flex flex-col gap-2'>
                        <Link className='flex flex-row justify-start items-center gap-1 border-solid border-2 border-sky-500 rounded p-1 px-2 bg-yellow-400 hover:bg-yellow-500 shadow-lg' to={`/Edit/${item.id}`}  > <RiFileEditFill/> <span>Edit</span> </Link>
                        <Link className='flex flex-row justify-start items-center gap-1 border-solid border-2 border-sky-500 rounded p-1 px-2 bg-red-400 hover:bg-red-500 shadow-lg' to={"/Delete"} > <AiFillDelete/> Delete </Link>
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

export default UsersLoad