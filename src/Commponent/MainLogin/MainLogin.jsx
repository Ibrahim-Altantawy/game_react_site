import React from 'react'
import { Outlet } from 'react-router-dom'
import loginPhoto from '../../image/12.jpg'



export default function MainLogin() {
    return (
        <>
            <div className="container-fluid ">
                <div className="row m-auto justify-content-center mt-5 ">
                   
                    <div className='d-flex justify-content-center mt-5' >
                        <img src={loginPhoto} alt='loginPhoto' className='col-md-5  	d-none d-lg-block d-xl-block ' />
                       
                       <Outlet/>
                    </div>
                </div>
            </div>
        </>
    )
}
