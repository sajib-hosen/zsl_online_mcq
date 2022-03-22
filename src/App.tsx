import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import StudentForm from './Components/Pages/StudentForm/StudentForm';
import Quiz from './Components/Pages/Quix/Quiz';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={ <StudentForm />} />
          <Route path='/quiz' element={ <Quiz /> } />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
