import React from 'react'

const AddUsers = (props) => {
  const {setContactList} = props;
  const [inputValue, setInputValue ] = React.useState({
    name: "",
    email: "",
    address: ""
  });

  const addHandler = (event)=> {
     const { name, value } = event.target;

     setInputValue(state => ({
       ...state,
       [name]: value
     }));
      
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if(inputValue.name !== "") {
      setContactList(state => ([
        ...state,
        inputValue
      ]))
    }
  } 

  return (
      <div className="Inputfields w-96 h-96 m-40 rounded ">
          <form onSubmit={handleSubmit} className='flex flex-col p-10 pl-10 bg-slate-400 rounded' >
            <label htmlFor="nameInput">Name: </label>
            <input className='nameInput m-5 ml-0 mt-1 p-1' type="text" name='name' placeholder='Please enter your name' onChange={addHandler}></input>
            <label htmlFor="nameInput">Email: </label>
            <input className='EmailInput m-5 ml-0 mt-1 p-1' type="email"name='email' placeholder='Please enter your email' onChange={addHandler}></input>
            <label htmlFor="nameInput">Address: </label>
            <textarea className='AddressInput m-5 ml-0 mt-1 p-1' type="text"name='address' placeholder='Please enter your address' onChange={addHandler}></textarea> 
            <button type="submit"> Submit </button>
          </form>
      </div>
  )
}

export default AddUsers


