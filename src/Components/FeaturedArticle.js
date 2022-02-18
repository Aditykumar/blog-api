import React, { useEffect,useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
function FeaturedArticle() {
    let item1 = []
    let item2 = []
    const [data,setData] = useState([])
    useEffect(()=>{
        axios.get("https://aditykumar-blog-backend.herokuapp.com/api/v1/blogData/details")
        .then((value)=>setData(value.data))
        .catch(err => {console.log(err)})

    },[])
    data.forEach((a) => {
        let key = a.Id
        switch (key) {
            case "17":
                item1.push({
                    name: a.Name,
                    img: a.Img,
                    id: a.Id,
                    date: a.Date,
                    detail: a.Details,
                    category:a.Category

                })
                break;
            case "18":
                item2.push({
                    name: a.Name,
                    img: a.Img,
                    id: a.Id,
                    date: a.Date,
                    detail: a.Details,
                    category:a.Category

                })
                break; case "32":
                item2.push({
                    name: a.Name,
                    img: a.Img,
                    id: a.Id,
                    date: a.Date,
                    detail: a.Details,
                    category:a.Category
                 
                })
                break;

            default:
                break;
        }

    })

    return (




        <div className='FeatureArtBox' >
            {item1.map((data) =>
                <div  key={data.id}className="FeatureBox1" >
                    <Link to={`/artReading/${data.id}`}><img style={{cursor:"pointer"}} className='FeatureImgBox1' src={data.img} alt="" /></Link>
                    <div className='box1Txt'>{data.name}</div>
                    <div className='box1TxtDate'>{data.category} / {data.date}</div>
                </div>

            )}
            <div>
                {item2.map((data) => 
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

