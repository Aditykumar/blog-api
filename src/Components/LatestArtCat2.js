
import React, { useEffect, useState } from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'
function LatestArtCat2() {
    const fitness3 = []
    const fitnessAll = []
    const [visible, SetVisible] = useState(false)
    const [data,setData] = useState([])

    useEffect(()=>{
        axios.get("https://aditykumar-blog-backend.herokuapp.com/api/v1/blogData/details")
        .then((value)=>setData(value.data))
        .catch(err => {console.log(err)})

    },[])
    data.forEach((a) => {
        if (a.Category === "fitness") {
            fitnessAll.push({
                name: a.Name,
                img: a.Img,
                id:a.Id,
                date:a.Date,
                detail:a.Details,
                category:a.Category

            })
        }

    })
    fitnessAll.forEach((a, index) => {
        if (index < 3) {
            fitness3.push({
                name: a.name,
                img: a.img,
                id:a.id,
                date:a.date,
                detail:a.detail,
                category:a.category

            })
        }

    })

    return (
        
             <div className='FlexRow'>
                {visible ? <>{fitnessAll.map((latest) => 
                            <div  key={latest.id}>
                                <div style={{cursor:"pointer"}} > <Link to={`/artReading/${latest.id}`}><img className='cardImgBox' src={latest.img}alt=""/> </Link></div>
                                <div>
                                    <div className='cardTitle'>{latest.name}</div>
                                    <span className='cardDec '>About: {latest.detail.slice(0,30)} ...</span>
                                     <p className='cardDate'>{latest.category}<span className='cardDec'>  / {latest.date}</span></p>
                              </div>
                           </div>
                        ) }
                      <button style={{cursor:"pointer"}} className='loadMore' onClick={()=>{ SetVisible(false)}} > View Less &#8592;</button> </>
                    :<>{fitness3.map((latest) => 
                        <div key={latest.id}>
                                <div style={{cursor:"pointer"}} > <Link to={`/artReading/${latest.id}`}><img className='cardImgBox' src={latest.img}alt=""/> </Link></div>
                            <div>
                                <div className='cardTitle'>{latest.name}</div>
                                <span className='cardDec '>About: {latest.detail.slice(0,30)} ...</span>
                                <p className='cardDate'>{latest.category}<span className='cardDec'> / {latest.date}</span></p>
                           </div>
                       </div>
                    ) }
                    <button style={{cursor:"pointer"}} className='loadMore' onClick={()=>{ SetVisible(true)}} > View More &#8594;</button></>
                
                }
        </div>
    )
}

export default LatestArtCat2
