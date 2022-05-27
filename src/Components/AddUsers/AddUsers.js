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
      <div className="">
          <form onSubmit={handleSubmit} className='flex flex-col p-10 bg-slate-500 rounded' >
            <div className='m-2 flex flex-col'>
                <label htmlFor="nameInput">Name: </label>
                <input className='nameInput p-1 rounded' type="text" name='name' placeholder='Please enter your name' onChange={addHandler}></input>
            </div>

            <div className='m-2 flex flex-col'>
                  <label htmlFor="nameInput">Email: </label>
                  <input className='EmailInput p-1 rounded' type="email"name='email' placeholder='Please enter your email' onChange={addHandler}></input>
            </div>

            <div className='m-2 flex flex-col'>
                <label htmlFor="nameInput">Address: </label>
                <textarea className='AddressInput p-1 rounded' type="text"name='address' placeholder='Please enter your address' onChange={addHandler}></textarea> 
            </div>

            <div className='m-2 flex flex-col rounded'>
              <button type="submit" className = "p-2 bg-sky-600 hover:bg-sky-700 ... rounded" > Submit </button>
            </div>

          </form>
      </div>
  )
}

export default AddUsers


