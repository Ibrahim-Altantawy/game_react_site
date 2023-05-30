import React, { useState, useEffect } from 'react'
import { AiFillPlusCircle, AiFillWindows } from "react-icons/ai";
import { FaEdgeLegacy } from "react-icons/fa";
import InfiniteScroll from 'react-infinite-scroll-component';


import './AllProduct.css'
import axios from 'axios';
import { Link } from 'react-router-dom';


export default function All_product(){
  const [More, setMore] = useState(true)
  const [prevData, setprevData] = useState([])
  const [prevDataLenght, setprevDataLenght] = useState(0)
  const [games, setGames] = useState([])
  const [startPoint, setstartPoint] = useState(0)
  const [items, setItems] = useState(20)

  /**scroll function.................................... */
  const loadMore = () => {
    console.log("you in load function")

      const data = prevData.slice(startPoint, items);
      console.log(prevData);
      setGames((prev) => [...prev, ...data])
      setstartPoint(startPoint + 20)
      setItems(items+20)

      console.log("startPoint" + startPoint);

  
      console.log("startPoint" + startPoint);

      console.log("there is nothing");
    



  };


  // fetchAllGame();

  useEffect(function () {
    setMore(true)

    fetchAllGame()

   

  },[]);
  useEffect(function () {
    startPoint<prevDataLenght?setMore(true):setMore(false);
    },[startPoint,prevDataLenght]);


    
  async function fetchAllGame() {
    const repo = await axios.get('https://free-to-play-games-database.p.rapidapi.com/api/games', { headers: {
       'X-RapidAPI-Key':'b52128808dmsh5826403ec30ac21p1b9548jsnfca5769e0b68',
       'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com' } });
   
    const Data = await repo.data;
    setprevData(Data)
    setprevDataLenght (Data.length);
    console.log(Data.length);
    setGames(Data.slice(0, 20))
    setstartPoint(19)
    setItems(39)
   
    };
  
    return (
    <>
      <div className="container mt-5 text-white  text-center" >
        <div className="row pt-5">
          <InfiniteScroll className="row pt-5"
            dataLength={games.length} //This is important field to render the next data
            next={ loadMore}
            hasMore={More}
            loader={<h4 className='text-center'>Loading...</h4>}
            endMessage={
              <p style={{ textAlign: 'center' }}>
                <b>Yay! You have seen it all</b>
              </p>
            }

          >
            {games?games.map((game, idx) => <Link to={"/details"} key={idx} className=' d-flex flex-column  col-md-3 p-0 rounded-2  p-1 gameCard  text-decoration-none ' >
              <div className=' '>
                <img src={game.thumbnail} alt="gameImage" className='w-100 rounded-top' />
              </div>
              <div className='gameBody rounded-bottom'>
                <div className='d-flex  justify-content-between w-100 my-2 px-2  align-items-start '>
                  <p>{game.title}</p>
                  <span className='btn btn-primary px-3'>free</span>
                </div>
                <div className='d-flex my-2 px-2 align-items-center '>
                  <AiFillPlusCircle />
                  <span className=' border rounded-2 px-2 ms-auto  '>game tag</span>
                  <AiFillWindows className='ms-2' />
                  <FaEdgeLegacy className='ms-2' />
                </div>
              </div>

            </Link>)
           :'' }
          </InfiniteScroll>


        </div>
      
      </div>
    </>
  )
}
