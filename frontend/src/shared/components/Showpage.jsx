import React from 'react'
import Navbar from './Navbar';
import Form from '../../components/Form';
import Mainhome from '../../pages/Mainhome';
import { Route } from 'react-router-dom';
import { Routes } from 'react-router-dom';
import { Navigate } from 'react-router-dom';
const Showpage = () => {
  return (
    <>
    <Navbar/>
    <Routes>
        <Route path='/' element={<Mainhome/>}/>
        <Route path='/form' element={<Form/>}/>
        <Route path='*' element={<Navigate replace to='/'/>}/>
    </Routes>
    </>

  )
}

export default Showpage