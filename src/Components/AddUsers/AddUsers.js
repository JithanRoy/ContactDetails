import React from 'react'
import  './AddressInput.css';

const AddUsers = () => {
  return (
    <div className='userInputBox'>
        <input className='nameInput' type="text" placeholder='Name'></input>
        <input className='EmailInput' type="email" placeholder='Email'></input>
        <input className='AddressInput' type="text" placeholder='Address'></input>
    </div>
  )
}

export default AddUsers