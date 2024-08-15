import React from 'react';
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import Home from './pages/Home';
import MainLayout from './layouts/MainLayout';

const App = () => {

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path = '/' element ={<MainLayout/>}>
         <Route path="/" element={<Home />} />
      </Route>
     
    )
  );

  return <RouterProvider router={router} />;
}

export default App;
