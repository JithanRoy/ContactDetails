import React, { useState } from 'react'
import AddUsers from '../AddUsers/AddUsers'
import Users from '../Users/Users'

const ContactUserList = () => {
  const [ contactList, setContactList] = React.useState([]);

  return (
    <div>
        <AddUsers setContactList={setContactList} />
        <Users contactList={contactList} />
    </div>
  )
}

export default ContactUserList