import React, { useEffect, useState } from 'react'
import axios from 'axios'

import { Link } from 'react-router-dom'

function TopArtWebsite(props) {
   
    const [data,setData] = useState([])
    useEffect(()=>{
        axios.get("https://aditykumar-blog-backend.herokuapp.com/api/v1/blogData/details/top")
        .then((value)=>setData(value.data))
        .catch(err => {console.log(err)})

    },[])

      


    return (
        <div>
            <div className='FlexRow  topArtContainer'>
                {data.filter((value,index)=>index<1).map((ra, index) =>
                    <div key={ra.id}>
                        <div style={{ cursor: "pointer" }}><Link to={`/artReading/${ra.id}`}> <img className='topArtImgBox' src={ra.img} alt="top" /></Link></div>

                        <div className='FlexRow1'>
                            <div className='top1ArtTitle'>
                                <div>{ra.name}</div>
                                <p className='cardDate'>{ra.category}<span className='cardDec'> / {ra.date}</span></p>
                            </div>
                            <div className='topArtIndex'> {index + 1}</div>
                        </div>
                    </div>
                )}
                {data.filter((value,index)=>index>0).map((raa, index) =>
                    <div key={raa.id} className='FlexRow1'>
                        <div style={{ cursor: "pointer" }}><Link to={`/artReading/${raa.id}`}>  <img className='topArtImgBox2' src={raa.img} alt="{raa.name}" /></Link></div>
                        <div className='topArtTitle'>
                            <div>{raa.name.slice(0, 15)}</div>
                            <p className='cardDate'>{raa.category}<span className='cardDec'> / {raa.date}</span></p>
                        </div>

                        <div className='topArtIndex'> {index + 2}</div>
                    </div>

                )}
            </div>
        </div>
    )
}

export default TopArtWebsite
