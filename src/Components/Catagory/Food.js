import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import TopArtWebsite from '../TopArtWebsite'
function Food() {
  const [content,setContent] = useState([])

  useEffect(()=>{
      axios.get("https://aditykumar-blog-backend.herokuapp.com/api/v1/blogData/details/food")
      .then((value)=>setContent(value.data))
      .catch(err => {console.log(err)})

  },[])






  return (
    <div className='FlexRow1'>
    <div>
      {content.map((row) =>
        <div key={row.id} className='FlexRow' >
          <div style={{ cursor: "pointer" }}> <Link to={`/artReading/${row.id}`}> <img className='cardImgBox' src={row.img} alt="" /></Link> </div>
          <div>
            <div className='cardTitle'>{row.name}</div>
            <div className='cardDec cardContain'>
              <div>{row.details}</div>


            </div>
            <p className='cardDate'>{row.category}<span className='cardDec'> / {row.date}</span></p>
          </div>

        </div>
      )}
     </div>
      <div >
        <div className='Advertistement'>Advertistement</div>
        <div className='homeLatestTxt'><div className='TxtBorder'>The </div> Top</div>
        <TopArtWebsite />
      </div>
    </div>
  )
}

export default Food
