import React from 'react'
import './Home.css'
import { IoLogoGameControllerB } from 'react-icons/io';

import { Link } from 'react-router-dom';


export default function Home() {
  return (
    <>
      <div className="container-fluid  bg-dark">
        <div className="row pt-5 justify-content-center">
          <div className='text-center text-white-50 mainHomeSection'>
            <h2>Find & track the best  <span className='text-primary mx-2'>free-to-play</span> games!</h2>
            <p className='fw-light'>Track what you've played and search for what to play next! Plus get free premium loot!</p>
            <button className='btn  btn-outline-light '>Browse Game</button>
          </div>

        </div>
        <div className='text-white-50  row  '>
          <h2 className='ps-5 '> <IoLogoGameControllerB className='ms-5'/> Personalized Recommendations</h2>
          <div className='d-flex flex-wrap mb-5  justify-content-center'>
            <div className="card gameCard col-lg-3 col-sm-12 col-md-5 m-1 bg-dark m-1 "   >
              <img src={require('../../image/11.jpg')} className="card-img-top" alt="game_Photo" />
              <div className="card-body d-flex  justify-content-between">
                <h5 className="card-title">Genshin Impact</h5>

                <Link to="" className="btn btn-primary px-4">Free</Link>
              </div>
            </div>
            <div className="card gameCard col-lg-3 col-sm-12 col-md-5 m-1 bg-dark m-1 "  >
              <img src={require('../../image/13.jpg')} className="card-img-top" alt="game_Photo" />
              <div className="card-body d-flex  justify-content-between">
                <h5 className="card-title">Fall Guys</h5>

                <Link to="" className="btn btn-primary px-4">Free</Link>
              </div>
            </div>
            <div className="card gameCard col-lg-3 col-sm-12 col-md-5 m-1 bg-dark m-1"  >
              <img src={require('../../image/14.jpg')} className="card-img-top" alt="game_Photo" />
              <div className="card-body d-flex  justify-content-between">
                <h5 className="card-title">Narato Online</h5>

                <Link to="" className="btn btn-primary px-4">Free</Link>
              </div>
            </div>
          </div>
        </div>

      </div>
    </>
  )
}
