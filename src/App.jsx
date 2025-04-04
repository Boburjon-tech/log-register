import { useState } from 'react'
import { RouterProvider,createBrowserRouter } from 'react-router-dom'
import ProtectedRoutes from './components/ProtectedRoutes'
import Login from './pages/login'
import Register from './pages/register'
import MainLayout from './layouts/MainLayout';
import Home from './pages/home';
import Create from './pages/Create';
import { useGlobalContext } from './hooks/useGlobalContext'
import { Navigate } from 'react-router-dom'

function App() {
  const {user} = useGlobalContext();
  const routes = createBrowserRouter([
    {
      path: "/",
      element:<ProtectedRoutes user={user}><MainLayout/></ProtectedRoutes> ,
      children:[
        {
          index : true,
          element : <Home/>
        }
      ]
    },
    {
      path: "/Create",
      element : <Create/>
    },
    {
      path: "/login",
      element : user ? <Navigate to="/"/> : <Login/>
    },
    {
      path: "/register",
      element : user ? <Navigate to="/"/> : <Register/>
    },
  ]);

  return (
    <RouterProvider router={routes}/>
  )
}

export default App;
