import axios from "axios";
import React, {useState, useEffect} from "react";
import Edit from "../Edit/Edit";
import UsersLoad from "../UsersLoad/UsersLoad";


const Home = ({contactList}) => {
    const [users, setUsers] = useState('');

    const getUserData = async() => {
        try {
            const response = await axios.get('https://jsonplaceholder.typicode.com/users');
            const data = await response.data;
            setUsers(data);
        } catch (error){
            console.log(error);
        }
    }
    useEffect (() => {
        getUserData();
    }, [])
   
    return (
        <UsersLoad contactList={contactList} users={users}/>
    )
}

export default Home;