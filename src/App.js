import { Link, Route, Routes } from 'react-router-dom';
import AddUsers from './Components/AddUsers/AddUsers';
import Delete from './Components/Delete/Delete';
import Edit from './Components/Edit/Edit';
import Home from './Components/Pages/Home';
import React from 'react';

function App() {
  const [ contactList, setContactList] = React.useState([]);
  return (
    <div className="App">
        <Routes>
            <Route path='/' element= {<Home/>} ></Route>
            <Route path='/adduser' element= {<AddUsers/>}></Route>
            <Route path='/edit/:id' element = {<Edit/>}></Route>
            <Route path='/delete' element = {<Delete/>}></Route>     
        </Routes>
    </div>
  );
}

export default App;
