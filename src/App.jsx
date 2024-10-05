import React, { useState, useEffect } from 'react';
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import Home from './pages/Home';
import MainLayout from './layouts/MainLayout';
import AddNotePage from './pages/AddNotePage';
import NoteDetailPage from './pages/NoteDetailPage';
import EditNotePage from './pages/EditNotePage';
import axios from "axios";   
import { toast } from 'react-toastify';

const App = () => {
  const [notes, setNotes] = useState([]);  
  const [isLoading, setIsLoading] = useState(false);

  useEffect(()=>{
    setIsLoading(true)  
    axios.get('http://127.0.0.1:8000/notes/')
    .then(res=>{
       console.log(res.data)
      setNotes(res.data)
      setIsLoading(false)
      
    })
    .catch(err=>{
      console.log(err.message)
    })
  },[])

  const addNote =(data)=>{
    axios.post('http://127.0.0.1:8000/notes/',data)
    .then(res =>{
      setNotes([...notes, data])
      toast.success(' A new note has been added')   // adding note funtion
      console.log(res.data)
    })

    
    .catch(err=>{
      console.log(err.message)
    })
  }

  const updateNote = (data, slug) => {
    axios
      .put(`http://127.0.0.1:8000/notes/${slug}/`, data)
      .then((res) => {
        console.log(res.data);
        toast.success("Note updated succesfully");
      })

      .catch((err) => console.log(err.message));
  };



  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path = '/' element ={<MainLayout/>}>
         <Route index element={<Home notes ={notes} loading ={isLoading} />} />
         <Route path='/add-note' element ={<AddNotePage addNote={addNote} />}/>
         <Route path='/edit-note/:slug' element ={<EditNotePage updateNote = {updateNote}/>}/>
         <Route path='/notes/:slug' element ={<NoteDetailPage/>}/>
      </Route>
     
    )
    
  );

  return <RouterProvider router={router} />;
}

export default App;
