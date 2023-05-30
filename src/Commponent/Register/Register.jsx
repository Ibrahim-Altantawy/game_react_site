import React from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { FaUserEdit } from 'react-icons/fa';
import './Register.css'
import { useState } from 'react';
import Joi from 'joi'
import axios from 'axios';


export default function Register() {

    let navi = useNavigate();
    const [user, SetUser] = useState({

        first_name: "",
        last_name: "",
        email: "",
        password: "",
        age: 0
    })
    /**ji rrrors state ....................... */
    const [joiErros, SetJoiErrors] = useState(null)
    /**end......................................... */
    function getUser(e) {
        // console.log(e.target.id)
        let inputId = e.target.id;
        let newUser = { ...user }
        newUser[inputId] = e.target.value;
        SetUser(newUser)
        SetJoiErrors(null)
        // console.log(newUser);
    }

    function submitForm() {

        const schema = Joi.object({
            first_name: Joi.string().alphanum().min(3).max(30).required(),
            last_name: Joi.string().alphanum().required(),
            email: Joi.string().email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } }),
            password: Joi.string()
                .pattern(new RegExp('^[a-zA-Z0-9]{3,30}$')),
            age: Joi.number()
                .integer()
                .min(18)
            ,

        })

        let joiErrosCopy = schema.validate(user, { abortEarly: false }).error

        console.log(joiErrosCopy);
        if (joiErrosCopy != undefined) {

            SetJoiErrors(joiErrosCopy.details)
            console.log(joiErros);

        } else {
           
            //go to call api 
            setNewUser()


        }

        
      

// let apiRespons = axios.post('https://route-egypt-api.herokuapp.com/signup', user)

    }

 /** sent uer details to api */
   
    async function setNewUser() {
        let apiRespons = await axios.post('https://sticky-note-fe.vercel.app/signup', user)
        console.log(apiRespons.data.message);
       if(apiRespons.data.message=='success'){
        let message ="تم التسجيل بنجاح هل تريد الانتقال الي صفحة الدخول";
        
        if (window.confirm(message)){
           
          
           navi('/');
        }
      }
    }



    return (
        <>
            {/* {joiErros?joiErros.map((e)=><div  className='alert alert-danger'>{e.message}</div>):""} */}

            <div className=' d-flex justify-content-center flex-wrap  col-lg-5 col-sm-10 text-white-50  bg-dark' >

                <div className="w-100 d-flex flex-wrap justify-content-center text-center px-5 justify-content-between  ">
                    <h3 className='w-100 my-3'> Create My Account</h3>
                    <div className='w-50'>
                        <input type="text" placeholder='First Name' onChange={getUser} id='first_name' className=' form-control mb-2  bg-black text-white border-0' />
                        <p className='text-danger fs-6'>{joiErros ? joiErros.map((e) => e.context.key == 'first_name' ? e.message : "") : ""} </p>
                    </div>

                    <div className='LastName'>
                        <input type="text" placeholder='Last Name' onChange={getUser} id='last_name' className=' form-control mb-2 bg-black text-white border-0' />
                        <p className='text-danger fs-6'>{joiErros ? joiErros.map((e) => e.context.key == 'last_name' ? e.message : "") : ""} </p>
                    </div>

                    <input type="email" placeholder='Email' onChange={getUser} id='email' className=' form-control mb-2 bg-black text-white border-0' />
                    <p className='text-danger fs-6'>{joiErros ? joiErros.map((e) => e.context.key == 'email' ? e.message : "") : ""} </p>
                    <input type="number" placeholder='Age' onChange={getUser} id='age' className=' form-control mb-2 bg-black text-white border-0' />
                    <p className='text-danger fs-6'>{joiErros ? joiErros.map((e) => e.context.key == 'age' ? e.message : "") : ""} </p>
                    <input type="password" placeholder='PassWord' onChange={getUser} id='password' className=' mb-3 form-control bg-black text-white border-0' />
                    <p className='text-danger fs-6'>{joiErros ? joiErros.map((e) => e.context.key == 'password' ? e.message : "") : ""} </p>
                    <p className="lead fs-6">This site is protected by reCAPTCHA and the Google Privacy Policy and Terms of Service apply.
                    </p>
                    <button className='btn w-100  mb-3  border-white text-light' onClick={submitForm}> Create Account</button>
                </div>
                <div className="w-75 border-top  text-center pt-3 mt-3">

                    <p>Already A Member  <Link className='  text-decoration-none ms-2 ' to='/'> Login <FaUserEdit className='ms-1' /></Link></p>

                </div>
            </div>


        </>
    )
}
