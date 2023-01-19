import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import View from './View';
import Viewitem from './Viewitem'
import Form from './Form'




function App() {
  return (
    <>
    <div className='header'>
    <div className='header__logo' ><img src='https://zelarsoft.com/wp-content/uploads/2021/10/logo.png'></img></div>
    </div>
   <BrowserRouter>
   <div className='navigation'>
    {/* <Link className='btn' to="View">View</Link> */}
   
   </div>
   <Routes>
    <Route path='/' element={<View/>}/>
    <Route path='/View' element={<View/>}/>
    <Route path='/View/:id' element={<Viewitem/>}></Route>
    <Route path='/create' element={<Form/>}></Route>
    <Route path='/update/:id' element={<Form/>}></Route>
   </Routes>
  
   </BrowserRouter>
   </>
  );
}

export default App;
