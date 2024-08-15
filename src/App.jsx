import React from 'react';
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import Home from './pages/Home';
import MainLayout from './layouts/MainLayout';
import AddNotePage from './pages/AddNotePage';

const App = () => {

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path = '/' element ={<MainLayout/>}>
         <Route index element={<Home />} />
         <Route path='/add-note' element ={<AddNotePage/>}/>
      </Route>
     
    )
  );

  return <RouterProvider router={router} />;
}

export default App;
