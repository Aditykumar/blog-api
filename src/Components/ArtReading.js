import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useParams } from "react-router-dom";
import { Link } from 'react-router-dom'
import ClapCount from './Hoc/ClapCount'
import avtar from '../logo/avtar.png'
function ArtReading(props) {
    const { id } = useParams();

    const [data, setData] = useState([])

    useEffect(() => {
        axios.get(`https://aditykumar-blog-backend.herokuapp.com/api/v1/blogData/details/category/?id=${id}`)
            .then((value) => setData(value.data))
            .catch(err => { console.log(err) })

    }, [id]);




    return (
        <>{
            data[1] ?
                <div>
                    <div className="ClapFixed">
                        <ClapCount />
                        <br />
                        <div><i className="fas fa-share-alt"> </i>&nbsp; &nbsp;Share this article</div>
                    </div>
                    <div className="FlexRow readJustifyCenter ">

                        {data.filter((value, index) => index < 1).map((result) =>
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
                    <div style={{ background: "white" }}>
                        <div className='homeLatestTxt'><div className='articleHtext'>More </div> Latest  Article</div>
                        <div className='FlexRow'>

                            {data.filter((dataa, index) => (index > 0) && (index < 4)).map((latest) =>
                                <div key={latest.id}>

                                    <div style={{ cursor: "pointer" }} > <Link to={`/artReading/${latest.id}`}><img className='cardImgBox' src={latest.img} alt="" /> </Link></div>
                                    <div>
                                        <div className='cardTitle'>{latest.name}</div>
                                        <span className='cardDec '>About : {latest.details.slice(0, 30)} </span>
                                        <p className='cardDate'>{latest.category}<span className='cardDec'>/ {latest.date}</span></p>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
                :
                <img className='loading' alt="Loading" src='https://img.search.brave.com/nL_PdLUf5zuqh-PEW0MHK_vcWSwh7BqqKENqm9qDEI4/rs:fit:512:384:1/g:ce/aHR0cHM6Ly9tZWRp/YS5naXBoeS5jb20v/bWVkaWEvdzdqdFZu/WHhNT3EwOC9naXBo/eS5naWY.gif' />
        }
        </>
    )
}

export default ArtReading
