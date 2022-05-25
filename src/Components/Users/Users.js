import React from 'react'

const Users = ({contactList}) => {
  return (
   <div>
     {contactList.length && (
       contactList.map((item) => (

        <div className='h-30 w-30 border-gray-400 p-5 bg-blue-300' >
            {item.name},
            <div>{item.email}</div>
            <div>{item.address}</div>
        </div>
    
       ))
     )}
   </div>
  )
}

export default Users