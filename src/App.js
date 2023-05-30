import React from 'react'
import { RouterProvider,createBrowserRouter } from 'react-router-dom'
import MainLogin from './Commponent/MainLogin/MainLogin'
import StartPage from './Commponent/StartPage/StartPage';
import Register from './Commponent/Register/Register.jsx'
import Login from './Commponent/Login/Login';
import Home from './Commponent/Home/Home';
import {Provider} from 'react-redux'
import { MainStore } from './Redux/Store';
import AllProduct from './Commponent/AllProduct/AllProduct';
import Details from './Commponent/Details/Details';


const router = createBrowserRouter([
  {path:'/' , element :<StartPage/>,children:[
    { path:'/',element:<MainLogin/>,
         children:[{path:"Register",element: <Register/>},{path:'/',element:<Login/>}] }
    ,{path:'Home',element:<Home/>}
    ,{path:'allProduct',element:<AllProduct/>}
    ,{path:'details',element:<Details/>}
  ]}
])

export default function App() {
  return (
    <>
    <Provider store={MainStore}>
    <RouterProvider router={router}/>
    </Provider>
      
        
        
    </>
      )
}
 