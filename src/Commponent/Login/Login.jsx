import React, { useState } from 'react'
import logoPhoto from '../../image/favicon.png'
import {  Link, useNavigate } from 'react-router-dom';
import { FaUserEdit } from 'react-icons/fa';
import jwtDecode from 'jwt-decode'
import { useDispatch } from "react-redux";
import { FetchData } from '../../Redux/LoginDataSlice'
// import { useSelector } from 'react-redux';

import axios from 'axios';
export default function Login() {
    let navi = useNavigate();
    const dispatch = useDispatch();
    const [loading ,setLoading] = useState(false)
    // const usrerData = useSelector((state) => {

    //     return state;

    // })
    function setUserDataAtLocallStorage(e) {
        localStorage.setItem("userData", e)

    }

    const [loginErrpr, setLoginError] = useState("")

    function getInputData() {
        setLoading(true);
        let userEmail = document.getElementById('email').value;
        let userPassword = document.getElementById('password').value;
        let inputUserData = {
            "email": userEmail,
            "password": userPassword,
        }
        let inputUser = JSON.stringify(inputUserData);
        async function fetchApi() {
            let loginApiRespons = await axios.post('https://sticky-note-fe.vercel.app/signin', inputUserData).then((e) => e.data)
            
            if (loginApiRespons.message == "success") {
                setLoginError("")
                let apiToken = jwtDecode(loginApiRespons.token)
                dispatch(FetchData(apiToken));
                let data = JSON.stringify(apiToken)
                setUserDataAtLocallStorage(data)
                console.log(apiToken)
                navi('Home')

            } else {
                setLoginError(loginApiRespons.message)
                // setLoading(false);    حذف الاسبنر من البوتوننن ولكن للاسف مش شغال 🤦‍♂️    
               console.log(loginApiRespons.message);
            }


        }
        fetchApi();
        return inputUser;


    }
    return (
        <>
            <div className=' d-flex justify-content-center flex-wrap  col-md-5 text-white-50  bg-dark' >
                <div className="w-100 text-center ">
                    <img src={logoPhoto} alt="logoPhoto" className='w-50 ' />
                </div>
                <div className="w-100 d-flex flex-wrap justify-content-center text-center px-5  ">
                    <h3 className='w-100 my-3'> login in to Game Over</h3>

                    <input type="email" id='email' placeholder='Email' className='w-100 form-control mb-2' />
                    {loginErrpr.includes("email") ? <p className='text-danger'>{loginErrpr}</p> : ""}

                    <input type="password" id='password' placeholder='PassWord' className='w-100 mb-3 form-control' />
                    {loginErrpr.includes("password") ? <p className='text-danger'>{loginErrpr}</p> : ""}

                    <button className='btn w-100  mb-3  border-white text-light' onClick={() => getInputData()}> {loading == false?'login':<i className="fa-solid fa-spinner fa-spin"></i>}</button>

                </div>
                <div className="w-75 border-top  text-center pt-3 mt-3">
                    <Link onClick={() => window.alert("معلشي اعملي ايميل جديد")} className='  text-decoration-none '>Forgot Password?</Link>
                    <p>Not a member yet?   <Link className='  text-decoration-none ms-2 ' to='Register'> create account <FaUserEdit className='ms-1' /></Link></p>

                </div>
            </div>

        </>
    )
}
