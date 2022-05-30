import React, { useState } from 'react'
import AddUsers from '../AddUsers/AddUsers'
import Users from '../Users/Users'
import Edit from "../Edit/Edit"
import Delete from "../Delete/Delete"
import { AiOutlineTool, AiFillDelete } from "react-icons/ai";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

const ContactUserList = () => {
  const [ contactList, setContactList] = React.useState([]);

  return (
    <div className='w-11/12 mx-auto  '>
       <div className='grid grid-cols-1 md:grid-cols-2 py-10 gap-5'>
        <AddUsers setContactList={setContactList} />
        <Users contactList={contactList} />
    </div>

    </div>





   
  )
}

export default ContactUserList