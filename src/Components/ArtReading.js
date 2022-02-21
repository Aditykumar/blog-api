import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useParams } from "react-router-dom";
// import { Link } from 'react-router-dom'
import ClapCount from './Hoc/ClapCount'
import avtar from '../logo/avtar.png'
import MoreArt from './MoreArt';

function ArtReading(props) {
    const { id } = useParams();
    // let result = []
    // const MoreResult = []
    const [data,setData] = useState([])

    useEffect(()=>{
        axios.get(`https://aditykumar-blog-backend.herokuapp.com/api/v1/blogData/details/category/?id=${id}`)
        .then((value)=>setData(value.data))
        .catch(err => {console.log(err)})

    },[id])
 
    // const cat = data.category.json();
    // console.log("aaaaaaaaaaaaaa",cat);
   



    return (
        <div>
            <div className="ClapFixed">
                                <ClapCount />
                                <br/>
                                <div><i className="fas fa-share-alt"> </i>&nbsp; &nbsp;Share this article</div>
                            </div>
            <div className="FlexRow readJustifyCenter ">

                {data.map((result) =>
                    <div key={result.id} className="ReadArtBox borderShadow">


                        <div className="txtAlignCenter">{result.name}</div>
                        <br />
                        <div className="FlexRow1 jstSpaceBeetben">
                            <div ><img alt="avter" style={{ width: "40px" }} src={avtar} /><i style={{ color: "gray" }}>Dmitry Nozhenko</i></div>
                            <div><i className="fab fa-facebook-square"></i> &nbsp;<i className="fab fa-twitter-square"></i> &nbsp;<i className="fab fa-instagram"></i> &nbsp;<i className="fab fa-youtube-square"></i></div>
                        </div>
                        <div>
                            <img className="readArtImg" alt="Article" src={result.img} />
                            <div>   <ClapCount /> </div>
                        </div>
                        <br />
                        <br />
                        <div className=" ReadArtBox"><i>{result.details}</i></div>
                        <br />
                        
                        <span>{result.about}</span>
                    </div>

                )
                }

            </div >
           <div style={{background:"white"}}>
            <div className='homeLatestTxt'><div className='articleHtext'>More </div> Latest  Article</div>
                    <MoreArt dataObject={id}/>

        </div></div>
    )
}

export default ArtReading
