import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import TopArtWebsite from '../TopArtWebsite'
function Food() {
  const [content, setContent] = useState([])

  useEffect(() => {
    axios.get("https://aditykumar-blog-backend.herokuapp.com/api/v1/blogData/details/food")
      .then((value) => setContent(value.data))
      .catch(err => { console.log(err) })

  }, [])






  return (
    <>{
      content[1] ? <div className='FlexRow1'>
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
        :
        <img className='loading' alt="Loading" src='https://img.search.brave.com/nL_PdLUf5zuqh-PEW0MHK_vcWSwh7BqqKENqm9qDEI4/rs:fit:512:384:1/g:ce/aHR0cHM6Ly9tZWRp/YS5naXBoeS5jb20v/bWVkaWEvdzdqdFZu/WHhNT3EwOC9naXBo/eS5naWY.gif' />
    }
    </>

  )
}

export default Food
