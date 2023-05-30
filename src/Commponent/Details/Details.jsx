import axios from 'axios'
import { boolean } from 'joi';
import React, { useState, useEffect } from 'react'
import './Details.css';

export default function Details() {
  /** fetch game details___________________________________________ */
  const [details, setDetails] = useState({})
  const [runVideo,setRunVideo]=useState(Boolean)
  async function fetchGameData() {
    const repo = await axios.request({
      method: 'GET',
      url: 'https://free-to-play-games-database.p.rapidapi.com/api/game',
      params: { id: '452' },
      headers: {
        'X-RapidAPI-Key': '64a01bdfaamsh20c4597d912d68fp1702d9jsn7ecee886a339',
        'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'
      }
    }
    )
    console.log(repo.data);
    setDetails(repo.data)

  };
  /**  End fetch game details____________________________________ */
  useEffect(
    function () {
      fetchGameData()
    }, []
  );

 function runVideoGame(e){
 e.target.setAttribute('autoplay','')
    console.log("run video");
    console.log(e.target);

    setRunVideo(true)


 }
 function stopVideoGame(e){
  e.target.removeAttribute('autoplay')
  console.log("stop video play");
  setRunVideo(false)
  console.log(e.target);

 }


  

  return (

    <>
      <div className="container-fluid bg-danger mt-5 text-white  text-center">
        <div className="row  pt-5 px-5 ">
          {/** دفاية الصورة والفيديو */}
          <div className=' ' >
            <div className='col-4 gameVideoImageDiv position-relative'>
              <img src={details.thumbnail} className='w-100  position-absolute top-0  bottom-0 start-0 end-0 gamePoster' alt='gamePoster'></img>
              <video  src={`https://www.freetogame.com/g/${details.id}/videoplayback.webm`} muted onMouseEnter={runVideoGame} onMouseLeave={stopVideoGame}  className='w-100 videoGame' ></video>
            </div>
            <div></div>
            <div></div>
          </div>
          <div></div>
        </div>
      </div>
    </>
  )
}
// onMouseEnter={runVideoGame} onMouseLeave={stopVideoGame} 
// poster={details.thumbnail}