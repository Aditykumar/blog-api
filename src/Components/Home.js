import React, { useState, useEffect } from 'react'
import FeaturedArticle from './FeaturedArticle'
import LatestArtAll from './LatestArtAll'
import LatestArtCat1 from './LatestArtCat1'
import LatestArtCat2 from './LatestArtCat2'
import LatestArtCat3 from './LatestArtCat3'
import TopArtWebsite from './TopArtWebsite'
import axios from 'axios'

function Home(props) {
    const [data, setData] = useState([])
    const art1 = []
    const art2 = []
    const art3 = []
    const artAll = []
    const topArt = []
    const featuredArt = []
    useEffect(() => {
        axios.get("https://aditykumar-blog-backend.herokuapp.com/api/v1/blogData/details")
            .then((value) => setData(value.data))
            .catch(err => { console.log(err) })
    }, [])
    data.forEach((a) => {
        let key = a.category
        switch (key) {
            case "bollywood":
                art1.push({
                    name: a.name,
                    img: a.img,
                    id: a.id,
                    date: a.date,
                    detail: a.details,
                    category: a.category

                })
                break;
            case "fitness":
                art2.push({
                    name: a.name,
                    img: a.img,
                    id: a.id,
                    date: a.date,
                    detail: a.details,
                    category: a.category

                })
                break;
            case "technology":
                art3.push({
                    name: a.name,
                    img: a.img,
                    id: a.id,
                    date: a.date,
                    detail: a.details,
                    category: a.category

                })
                break;
            case "top":
                topArt.push({
                    name: a.name,
                    img: a.img,
                    id: a.id,
                    date: a.date,
                    detail: a.details,
                    category: a.category

                })
                break;
            case "Featured":
                featuredArt.push({
                    name: a.name,
                    img: a.img,
                    id: a.id,
                    date: a.date,
                    detail: a.details,
                    category: a.category

                })
                break;

            default:
                break;
        }


    })
    data.forEach((a, index) => {
        if (index >= data.length - 3) {
            artAll.push(
                {
                    name: a.name,
                    img: a.img,
                    id: a.id,
                    date: a.date,
                    detail: a.details,
                    category: a.category

                }
            )
        }
    })
    console.log("**", art1);
    console.log("**", art2);
    console.log("**", art3);

    return (
        <>{
            data[1] ? <div className='FlexRow'>
                <FeaturedArticle dataObject={[featuredArt]} />

                <div className='homeLatestTxt'><div className='TxtBorder'>The </div> Latest</div>

                <LatestArtAll dataObject={[artAll]} />
                <div className='homeLatestTxt'><div className='articleHtext'>Latest </div>  Articles</div>
                <div className='FlexRow'>
                    <div className='ArtFlxCol'>
                        <LatestArtCat1 dataObject={[art1]} />
                        <div >
                            <img className='artVerticleImg' alt='gallary' src="https://i0.wp.com/buildesign.co.ke/wp-content/uploads/2018/01/W3A5833-Copy.jpg" />
                        </div>
                    </div>
                    <div className='  marginLeft'>
                        <div className='Advertistement'>Advertistement</div>
                        <div className='homeLatestTxt'><div className='TxtBorder'>The </div> Top</div>
                        <TopArtWebsite dataObject={[topArt]} />
                    </div>
                    <div className='homeLatestTxt'><div className='articleHtext'>Latest </div>  Technology Article</div>

                    <LatestArtCat3 dataObject={[art3]} />
                    <div className='homeLatestTxt'><div className='articleHtext'>Latest </div>  Fitness Article</div>

                    <LatestArtCat2 dataObject={[art2]} />

                </div>

            </div>
            :
            <img className='loading' alt="Loading" src='https://img.search.brave.com/nL_PdLUf5zuqh-PEW0MHK_vcWSwh7BqqKENqm9qDEI4/rs:fit:512:384:1/g:ce/aHR0cHM6Ly9tZWRp/YS5naXBoeS5jb20v/bWVkaWEvdzdqdFZu/WHhNT3EwOC9naXBo/eS5naWY.gif' />
        }
        </>
    )
}

export default Home
