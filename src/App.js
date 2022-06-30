import './App.css';
import {Routes, Route} from 'react-router-dom';
import UserList  from './Components/userList/UserList';
import Edit from './Components/Edit';
import Delete from './Components/Delete';

function App() {
  return (
    <div className='App'>
      <Routes>
          <Route path="/" element={<UserList/>}/>
          <Route path='Edit' element={<Edit/>}/>
          <Route path='Delete' element={<Delete/>}/>
      </Routes>
    </div>
  );
}

export default App;
