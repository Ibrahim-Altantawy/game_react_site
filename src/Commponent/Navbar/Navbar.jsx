import React ,{useEffect, useState} from 'react'
import { Link, json } from 'react-router-dom';
import { useSelector } from 'react-redux';

import logo from '../../image/favicon.png'
import './Navbar.css'

export default function Navbar() {


//  const [user,setUser]=useState({})

//   let userData= JSON.parse(localStorage.getItem("userData"))
 
//  console.log(user)
  
// useEffect(function(){
//   if(user == {}){
//     setUser(userData)
//   }
// },[user])
// const gata = useSelector((state)=>state
// )




  return (
    <>
    
       <nav className="navbar navbar-expand-lg NavBar navbar-dark px-5 fixed-top">
        <div className="container-fluid">
          <Link className="navbar-brand me-5 pe-3" to="home"> <img src={logo} alt="logo" className='LogoImage' /> Game Over</Link>

          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              {/* بيانات المستخدم...................................................................... */}
              <li className="nav-item me-5">
                {/* <Link className="nav-link active text-primary border rounded-2  " aria-current="page" to=""> Welcom Again MR: {user.first_name}</Link> */}
              </li>
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="home">Home</Link>
              </li>
              
              <li className="nav-item">
                <Link className="nav-link" to="allProduct">All</Link>
              </li>
              <li className="nav-item dropdown">
                <Link className="nav-link dropdown-toggle" to="home" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Platforms
                </Link>
                <ul className="dropdown-menu">
                  <li><Link className="dropdown-item" to="home">Action</Link></li>
                  <li><Link className="dropdown-item" to="home">Another action</Link></li>
                  <li><hr className="dropdown-divider" /></li>
                  <li><Link className="dropdown-item" to="home">Something else here</Link></li>
                </ul>
              </li>
              <li className="nav-item dropdown">
                <Link className="nav-link dropdown-toggle" to="home" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Sort-By
                </Link>
                <ul className="dropdown-menu">
                  <li><Link className="dropdown-item" to="home">Action</Link></li>
                  <li><Link className="dropdown-item" to="home">Another action</Link></li>
                  <li><hr className="dropdown-divider" /></li>
                  <li><Link className="dropdown-item" to="home">Something else here</Link></li>
                </ul>
              </li>
              <li className="nav-item dropdown">
                <Link className="nav-link dropdown-toggle" to="home" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Categories
                </Link>
                <ul className="dropdown-menu">
                  <li><Link className="dropdown-item" to="home">Action</Link></li>
                  <li><Link className="dropdown-item" to="home">Another action</Link></li>
                  <li><hr className="dropdown-divider" /></li>
                  <li><Link className="dropdown-item" to="home">Something else here</Link></li>
                </ul>
              </li>
              
            </ul>
          
              <button className="btn btn-outline-primary" type="submit">Join Free</button>
            
          </div>
        </div>
      </nav>
 
    </>
  )
}
