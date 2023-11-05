import React from 'react';
import { Routes, Route } from 'react-router-dom';
import SignUp from './components/SignUp';
import LogIn from './components/LogIn';
import './app.css';

export default function App(){
    return(
        <Routes>
            <Route path='/' element={<LogIn/>}/>
            <Route path='/signup' element={<SignUp/>}/>
        </Routes>
    )
}
