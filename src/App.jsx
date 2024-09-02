import React, { useState, useEffect } from 'react';
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import Home from './pages/Home';
import MainLayout from './layouts/MainLayout';
import AddNotePage from './pages/AddNotePage';
import NoteDetailPage from './pages/NoteDetailPage';
import EditNotePage from './pages/EditNotePage';
import axios from "axios";

const App = () => {
  const [notes, setNotes] = useState([]);  

  useEffect(()=>{
    axios.get('http://127.0.0.1:8000/notes/')
    .then(res=>{
      console.log(res.data)
      setNotes(res.data)
      
    })
    .catch(err=>{
      console.log(err.message)
    })
  },[])

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path = '/' element ={<MainLayout/>}>
         <Route index element={<Home notes ={notes} />} />
         <Route path='/add-note' element ={<AddNotePage/>}/>
         <Route path='/edit-note' element ={<EditNotePage/>}/>
         <Route path='/note-detail' element ={<NoteDetailPage/>}/>
      </Route>
     
    )
    
  );

  return <RouterProvider router={router} />;
}

export default App;
