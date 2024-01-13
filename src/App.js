import React from "react";
import {BrowserRouter, Routes,Route} from 'react-router-dom';
import Home from "./Asset/Home";
import Create from "./Asset/Create";
import Update from "./Asset/Update";
import Read from "./Asset/Read";

function App() {
  return (
   <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/create' element={<Create/>}></Route>
      <Route path='/update/:id' element={<Update/>}></Route>
      <Route path='/read/:id' element={<Read/>}></Route>
    </Routes>
   </BrowserRouter>
  );
}

export default App;
