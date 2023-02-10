import React from "react";
import './Projects.scss'
import wasup from './wasup.jpg'
import myPortfolio from './my-portfolio.png'
import clickUp from './clickUp.png'
import myBot from './myBot.png'
import sturbucks from './sturbucks.png'
import dictionary from './dictionary.png'
import school from './school.png'
import spotify from './spotify.png'
import datahub from './datahub.png'
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
            link:"https://datahubcom.netlify.app/"
        },
        {
            imgSource: wasup,
            title: "HomePage of web.whatsapp.com",
            type: "Front-End",
            link:"https://fluffy-melomakarona-7b01c6.netlify.app/"
        },
        {
            imgSource: myPortfolio,
            title: "Full parts of karimberdi.com",
            type: "Front-End",
            link:"https://karimberdi.com/"
        },
        {
            imgSource: clickUp,
            title: "Full Back-End system of clickup.com",
            type:"Back-End",
            link:"https://github.com/karimberdiDekhkonov/real-clickup"
        },
        {
            imgSource: myBot,
            title: "Full Back-End system of KarimberdiBot",
            type: "Back-End",
            link:"https://t.me/KarimberdiBot"
        },
        {
            imgSource: blackPortfolio,
            title: "HomePage of Portfolio",
            type: "Front-End",
            link:"https://karimberdi-wix1.netlify.app/"
        },
        {
            imgSource: dictionary,
            title: "Web Dictionary with free API",
            type: "Full-Project",
            link: "https://brilliant-banoffee-366268.netlify.app/"
        },
        {
            imgSource: sturbucks,
            title: "HomePage of sturbucks.com",
            type: "Front-End",
            link:"https://steady-pony-ebd904.netlify.app/"
        },
        {
            imgSource: school,
            title: "School project",
            type: "Full-Project",
            link: "https://sweet-bonbon-3b792f.netlify.app/htmls/subjects.html"
        },
        {
            imgSource: spotify,
            title: "HomePage of spotify.com",
            type: "Front-End"
        },
        {
            imgSource: music,
            title: "HomePage of centralmusic.com",
            type: "Front-End"
        }
    ]
    return <div className="Projects d-flex justify-content-center m-4">
        <div className="container-sm">
        <section className="text-center project">
            MY PROJECTS
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
            <button onClick={() =>{navigate('/eng/business')}} className="col-sm-8 mb-3 shadow-lg p-3 mb-5 bg-body-tertiary rounded btn btn-outline-danger mb-5">LET'S GET DOWN TO BUSINESS WITH ME</button>
           
        </section>  
        <Footer/>
        </div>
    </div>
}
export default Projects;