import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import View from './View';
import Viewitem from './Viewitem'
import Form from './Form'




function App() {
  return (
    <>
   
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
