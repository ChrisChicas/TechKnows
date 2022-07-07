import LoginForm from './users/LoginForm';
import SignUpForm from './users/SignUpForm';
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom';
import Navigation from './Navigation';

import './App.css';

function App() {
  return (

      <div className=''>
        <h1 className='header'>TechKnows Article</h1>
        <Navigation />
      <BrowserRouter>
      <div className="App">
       
      </div>
      
      <div className="display">
          <Routes>
            <Route path="/"  element={LoginForm }/>
            <Route path="/events" element={SignUpForm}/>
          </Routes>
      </div>
    </BrowserRouter>
</div>
  )
}

export default App;
