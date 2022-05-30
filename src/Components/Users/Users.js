import React from 'react'
import Edit from "../Edit/Edit"
import Delete from "../Delete/Delete"
import { AiOutlineTool, AiFillDelete } from "react-icons/ai";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

const Users = ({contactList}) => {
  return (
   <div>
     <div className='h-30 w-30 border-gray-400 p-5 bg-slate-500 grid grid-cols-1 md:grid-cols-2 gap-3 rounded m-' >
     {contactList.length && (
       contactList.map((item) => (

        
        <div  key={item.toString()} className='flex border-indigo-700 bg-indigo-200 p-5 rounded'> 
            <div className='max-w-max'>
                    <div className='text-lg font-semibold'>
                      Name: {item.name} 
                    </div>

                    <div className='text-xs font-thin'> 
                      Email: {item.email}
                    </div>

                    <div className='text-sm font-thin' >
                       Address: {item.address}
                    </div>

              </div>

              <Router>
                <Routes>
                  <Route src="/Edit" exact path="/Edit" Component = {Edit}><AiOutlineTool/></Route>
                  <Route exact path="/Delete" Component = {Delete}><AiFillDelete/></Route>
                </Routes>
              </Router>

              {/* <div className='flex flex-col m-2'>
                    <button className='float-right text-2xl focus-within:shadow-lg ...' src="/Edit"> <AiOutlineTool/> </button>
                    <button className='float-right text-2xl gap-2 pt-1' src="/Delete"> <AiFillDelete/> </button>
              </div> */}


        </div>
       ))
     )}
     </div>
   </div>
  )
}

export default Users