import React, {  useEffect,useState  } from 'react'
import { Link } from 'react-router-dom'

function LatestArtAll(props) {
    const [data,setData] = useState([])
    useEffect(()=>{
    
setData(props.dataObject[0])

     },[props.dataObject])
   
    return (
        <div style={{width:"auto"}}>
            <div className='FlexRow'>
                {
                    data.map((latest) =>
                        <div key={latest.id}>
                            <div className='cardImgBox' style={{ cursor: "pointer" }} > <Link to={`/artReading/${latest.id}`}><img className='cardImgBox' src={latest.img} alt="" /> </Link></div>

                            <div style={{margin:"15px"}} >
                                <div className='cardTitle'>{latest.name}</div>
                                <div className='cardDec '>About: {latest.detail.slice(0, 30)} ...</div>
                                <div className='cardDate'>{latest.category}<span className='cardDec'> / {latest.date}</span></div>
                            </div>
                        </div>
                    )}
            </div>
        </div>
    )
}

export default LatestArtAll
