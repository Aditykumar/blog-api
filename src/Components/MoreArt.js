import axios from 'axios'
import React,{useEffect,useState} from 'react'
import { Link } from 'react-router-dom'
function MoreArt(props) {
    const [data,setData] = useState([])
const catData=[]
   const id=props.dataObject
   const cat =[]
    useEffect(()=>{
        axios.get("https://aditykumar-blog-backend.herokuapp.com/api/v1/blogData/details")
        .then((value)=>setData(value.data))
        .catch(err => {console.log(err)})
    },[])
    data.forEach(value => {
        if (id===value.id) {
            cat.push(value.category)
            
        }
        
    });
data.forEach(a => {
    if (cat[0]===a.category) {
        catData.push(
                {name: a.name,
                img: a.img,
                id:a.id,
                date:a.date,
                detail:a.details,
                category:a.category}
        )
        
    }
    
});

  return (
  
    <div className='FlexRow'>

    {catData.filter((dataa, index) => index < 3).map((latest) =>
        <div key={latest.id}>

            <div style={{ cursor: "pointer" }} > <Link to={`/artReading/${latest.id}`}><img className='cardImgBox' src={latest.img} alt="" /> </Link></div>
            <div>
                <div className='cardTitle'>{latest.name}</div>
                <span className='cardDec '>About : {latest.detail.slice(0, 30)} </span>
                <p className='cardDate'>{latest.category}<span className='cardDec'>/ {latest.date}</span></p>
            </div>
        </div>
    )}
</div>
  )
}

export default MoreArt