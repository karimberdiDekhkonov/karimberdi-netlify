import React from "react";
import './Blogs.scss';
import Footer from "../../components/Footer";
import YoutubeEmbed from "./youtube/YoutubeEmbed";
import { useNavigate } from "react-router-dom";

function Blogs(){
    let navigate = useNavigate()
    const blogsData = [
        {
            embedId:"vIefkCqyB4E",
            title:"How to install java 8 on Windows in 2023"
        }
    ]
    return <div id="animation" className="container-sm text-center">
        <section className="about text-center">BLOGLARIM</section>
        <div className="row gap-5 justify-content-center mt-4 mb-4">
           {
                blogsData.map((video)=>{
                    return <div className="col-sm-6 col-md-4">
                    <YoutubeEmbed embedId={video.embedId} title={video.title}/>
                </div>
                })
           }
        </div>
        <button onClick={() =>{navigate('/uzb/business')}} className="col-sm-8 order-btn p-3 mb-5 mt-5r">HAMKORLIKNI BOSHLASH</button>
        <Footer/>
    </div>
}
export default Blogs;