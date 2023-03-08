import './App.css';
import Login from './login.js'
import Signup from './signup.js';
import TableDis1 from './table-1.js';
import Home from './homepage.js';
import Table2 from './table-2';
import { BrowserRouter, Routes, Route} from 'react-router-dom';

function App() {
  //React Routes into different pages
  return (
    <BrowserRouter>
      <div className="nav">
        <Routes>
          <Route path="/home" element={<Home />}></Route>
        </Routes>  
      </div>
      <div className="App">
        <div className='loginPage'>
          <Routes>
            <Route path="/" element={<Login />}></Route>
            <Route path="/login" element={<Login />}></Route>
            <Route path="/signup" element={<Signup />}></Route>
            <Route path="/table1" element={<TableDis1 />}></Route>
            <Route path="/table2" element={<Table2 />}></Route>
          </Routes>               
        </div>
      </div>  
    </BrowserRouter>
  );
}

// Export and display it on root div in index.html
export default App;
