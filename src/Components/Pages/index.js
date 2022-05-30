import React, { useState } from 'react'
import AddUsers from '../AddUsers/AddUsers'
import Users from '../Users/Users'



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