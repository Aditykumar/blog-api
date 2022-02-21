import React, { useEffect, useState } from 'react'
import {Link} from 'react-router-dom'
function LatestArtCat1(props) {
  
    const [visible, SetVisible] = useState(false)
    const [data,setData] = useState([])
    useEffect(()=>{
    
setData(props.dataObject[0])

     },[props.dataObject])
console.log("#art1#",data);

   
    return (
        <div>
                {visible ? <>{data.map((raa) => 
                            <div  key={raa.id} className='FlexRow'>
                                <div  style={{cursor:"pointer"}}><Link to={`/artReading/${raa.id}`}> <img className='cardImgBox' src={raa.img}alt=""/></Link> </div>
                                <div>
                                    <div className='cardTitle'>{raa.name}</div>
                                    <div className='cardDec cardContain'>About : {raa.detail.slice(0,110)}</div>
                                    <p className='cardDate'>{raa.category}<span className='cardDec'> / {raa.date} </span></p>
                               </div>
                           </div>
                        ) }
                      <button  style={{cursor:"pointer"}} className='loadMore' onClick={()=>{ SetVisible(false)}} >&#8593; Load Less </button> </>
                    :<>{data.filter((value,index)=>index<4).map((ra)=> 
                        <div key={ra.id}  className='FlexRow' >
                            <div  style={{cursor:"pointer"}}> <Link to={`/artReading/${ra.id}`}> <img className='cardImgBox' src={ra.img}alt=""/></Link> </div>
                            <div>
                                <div className='cardTitle'>{ra.name}</div>
                                <div className='cardDec cardContain'>About : {ra.detail.slice(0,110)}</div>
                                <p className='cardDate'>{ra.category}<span className='cardDec'> / {ra.date}</span></p>
                            </div>
                        </div>
                        )} 
                    <button  style={{cursor:"pointer"}} className='loadMore'onClick={()=>{ SetVisible(true)}} >&#8595; Load More</button></>
                
                }
        </div>
    )
}

export default LatestArtCat1
