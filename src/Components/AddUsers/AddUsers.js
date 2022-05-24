import React from 'react'

const AddUsers = () => {
  return (
      <div className="Inputfields w-96 h-96 m-40 rounded ">
          <form className='flex flex-col p-10 pl-10 bg-slate-400 rounded'>
            <label htmlFor="nameInput">Name: </label>
            <input className='nameInput m-5 ml-0 mt-1 p-1' type="text" placeholder='Please enter your name'></input>
            <label htmlFor="nameInput">Email: </label>
            <input className='EmailInput m-5 ml-0 mt-1 p-1' type="email" placeholder='Please enter your email'></input>
            <label htmlFor="nameInput">Address: </label>
            <textarea className='AddressInput m-5 ml-0 mt-1 p-1' type="text" placeholder='Please enter your address'></textarea> 
          </form>
      </div>
  )
}

export default AddUsers


