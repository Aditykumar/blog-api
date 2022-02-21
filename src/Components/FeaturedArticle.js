import React, { useEffect,useState } from 'react'
import { Link } from 'react-router-dom'
function FeaturedArticle(props) {
  
    const [data,setData] = useState([])
    useEffect(()=>{

setData(props.dataObject[0])

     },[props.dataObject])


   

    return (




        <div className='FeatureArtBox' >
            {data.filter((value,index)=>index<1).map((data) =>
                <div  key={data.id}className="FeatureBox1" >
                    <Link to={`/artReading/${data.id}`}><img style={{cursor:"pointer"}} className='FeatureImgBox1' src={data.img} alt="" /></Link>
                    <div className='box1Txt'>{data.name}</div>
                    <div className='box1TxtDate'>{data.category} / {data.date}</div>
                </div>

            )}
            <div>
                {data.filter((value,index)=>index>0).map((data) => 
                <div  key={data.id} className='FeatureBox2'>
                   <Link to={`/artReading/${data.id}`}> <img className='FeatureImgBox2' src= {data.img} alt="" /></Link>
                    <div className="box2Txt">{data.name}</div>
                    <div className='box2TxtDate'> {data.category} / {data.date}</div>
                </div>
                )}
            </div>
        </div>

    )
}

export default FeaturedArticle

