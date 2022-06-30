import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const UserList = () => {
  const [users, setUser] = useState([]);

  useEffect(() => {
    LoadUser();
  }, []);

  const LoadUser = async () => {
      const result = await axios.get('http://localhost:3001/users')
      console.log(result.data);
      setUser(result.data);
  }
  // console.log(users);
  return (
    <div>
      <div>
        <Link to="/AddUser">AddUser</Link>
      </div>
      {users.map((user, index) => (
        <div key={index}>
          <div>
              <h2>User ID : {user.id}</h2>
              <h4>Name : {user.name}</h4>
              <p>Phone : {user.email}</p>
              <p>Email : {user.username}</p>
          </div>

          <div>
            <button>
              <Link to="/Edit">Edit</Link>
            </button>
            <button>
              <Link to="/Delete">Delete</Link>
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default UserList;
