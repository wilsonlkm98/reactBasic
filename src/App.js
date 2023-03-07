import './App.css';
import Login from './login.js'
import Signup from './signup.js';
import Table from './table.js';
import Home from './homepage';
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
            <Route path="/signup" element={<Signup />}></Route>
            <Route path="/table" element={<Table />}></Route>
          </Routes>               
        </div>
      </div>  
    </BrowserRouter>
  );
}

// Export and display it on root div in index.html
export default App;
