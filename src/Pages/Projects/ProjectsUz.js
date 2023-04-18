import React from "react";
import './Projects.scss'
import wasup from './wasup.jpg'
import myPortfolio from './my-portfolio.png'
import clickUp from './clickUp.png'
import myBot from './myBot.png'
import sturbucks from './sturbucks.png'
import dictionary from './dictionary.png'
import datahub from './datahub.png'
import school from './school.png'
import spotify from './spotify.png'
import music from './music.png'
import blackPortfolio from './blackPortfolio.png'
import Footer from "../../components/Footer";
import { useNavigate } from "react-router-dom";

function Projects(){
    let navigate = useNavigate()
    const cardData = [
        {
            imgSource: datahub,
            title: "Real scheduling website called 'DataHub'",
            type: "Full project",
            link:"http://karimberdibot.s3-website.eu-central-1.amazonaws.com/"
        },
        {
            imgSource: wasup,
            title: "web.whatsapp.com saytining HomePage qismi",
            type: "Front-End",
            link:"https://fluffy-melomakarona-7b01c6.netlify.app/"
        },
        {
            imgSource: myPortfolio,
            title: "karimberdi.com saytining to'liq qismi",
            type: "Front-End",
            link:"https://karimberdi.com/"
        },
        {
            imgSource: clickUp,
            title: "clickup.com saytining Back-End qismi",
            type:"Back-End",
            link:"https://github.com/karimberdiDekhkonov/real-clickup"
        },
        {
            imgSource: myBot,
            title: "KarimberdiBot botining barcha qismi",
            type: "Back-End",
            link:"https://t.me/KarimberdiBot"
        },
        {
            imgSource: blackPortfolio,
            title: "Portfolio saytni HomePage qismi",
            type: "Front-End",
            link:"https://karimberdi-wix1.netlify.app/"
        },
        {
            imgSource: dictionary,
            title: "Online Lug'at bepul API bilan",
            type: "Full-Project",
            link: "https://brilliant-banoffee-366268.netlify.app/"
        },
        {
            imgSource: sturbucks,
            title: "sturbucks.com saytining HomePage qismi",
            type: "Front-End",
            link:"https://steady-pony-ebd904.netlify.app/"
        },
        {
            imgSource: school,
            title: "To'liq Maktab loyihasi",
            type: "Full-Project",
            link: "https://sweet-bonbon-3b792f.netlify.app/htmls/subjects.html"
        },
        {
            imgSource: spotify,
            title: "spotify.com saytining HomePage qismi",
            type: "Front-End"
        },
        {
            imgSource: music,
            title: "centralmusic.com saytining HomePage qismi",
            type: "Front-End"
        }
    ]
    return <div className="Projects d-flex justify-content-center m-4">
        <div id="animation" className="container-sm">
        <section className="text-center project">
            LOYIHALARIM
        </section>
        <section className="row justify-content-around gap-3">
            {
                cardData.map((card) =>{
                    console.log(card);
                    return <div className="col-sm-8 mb-3 shadow-lg p-3 mb-5 bg-body-tertiary rounded">
                        <div className="card-box">
                            <img src={card.imgSource} alt="image" />
                            <div className="d-flex justify-content-around mb-0">
                               <a href={card.link} target="_blank" className="text-primary text-center fs-3 mt-3 name-of-project">
                                    {card.title}
                                </a>
                                <p className="bg-danger text-light rounded-5 p-2 text-center fs-5 mt-3 type-of-project">
                                    {card.type}
                                </p>
                            </div>
                        </div>
                        
                    </div>
                })
            }
            <button onClick={() =>{navigate('/uzb/business')}} className="col-sm-8 order-btn p-3 mb-5 mt-5r">
            HAMKORLIKNI BOSHLASH
            </button>
           
        </section>  
        <Footer/>
        </div>
    </div>
}
export default Projects;