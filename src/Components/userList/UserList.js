import { Button } from '@mui/material';
import axios from 'axios';
import React from 'react'
import { useEffect, useState } from 'react'
import Edit from '../Edit';
import { Delete } from '../Delete';

const UserList = () => {
    const [users, setUser] = useState([]);

    useEffect(()=> { 
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(response => {
          setUser(response);
        }); 
    }, [])

    // console.log(users);

  return (
      <div>
        {
          users.map((user) => (
            <div>
                <div key={user.id}>
                    <h2>User ID : {user.id}</h2>
                    <h4>Name :  {user.name}</h4>
                    <p>Phone : {user.phone}</p>
                    <p>Email : {user.email}</p>
                </div>

                <div>
                  <button> <Edit/> </button>
                  <button> <Delete/> </button>
                </div>
            </div>
          ))
        }
      </div>
  )
}

export default UserList;