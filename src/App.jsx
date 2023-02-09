
import { Route, Routes } from 'react-router';
import { Link } from 'react-router-dom';
import './App.css';
import { AddTodo } from './Components/AddTodo';
import { Edit } from './Components/edit';
import { Todos } from './Components/Todos';

function App() {
  return (
    <div>
      <nav className="navbar navbar-expand bg-light">
        <div className="container-fluid">
         <h3>Info App</h3>
          
          <div>
            <ul className="navbar-nav">
              <li className="nav-item">
               <Link to='/' className='nav-link'>Details</Link>
              </li>
              <li className="nav-item">
                <Link to='/add' className='nav-link'>Add</Link>
              </li>
              <li className="nav-item">
                
              </li>
             
            </ul>
          </div>
        </div>
      </nav>


      <Routes>
        <Route path='/add' element={<AddTodo />}></Route>
        <Route path='/' element={<Todos />}></Route>
        <Route path='/edit' element={<Edit/>}></Route>
      </Routes>


    </div>
  );
}

export default App;
