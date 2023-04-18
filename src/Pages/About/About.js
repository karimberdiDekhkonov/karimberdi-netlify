import React from "react";
import './About.scss';
import laptop from './laptop.jpg';
import fergana from './fergana.jpg';
import projects from './projects.png';
import warsaw from './warsaw.jpeg';
import Footer from "../../components/Footer";
import { useNavigate } from "react-router-dom";

function About(){
  let navigate = useNavigate()
    return <div id="animation" className="About container-sm">
        <section className="about text-center">ABOUT ME</section>
        <section className="ln-1">
          {/* First */}
          <div>
            I am Karimberdi Dekhkonov, a 20-year-old <span className="fw-bolder">Software Engineer</span> from Fergana, Uzbekistan, currently living in Warsaw, Poland. <br /> <br />
          </div>
          <div className="my-5 text-center">
            <img src={fergana} alt="laptop" />
            <a href="https://goo.gl/maps/4KT8JQTMa7UKmrdy6" target="_blank" className="text-primary">Uzbekistan Fergana</a>
          </div>
          <div className="my-5 text-center">
            <img src={warsaw} alt="laptop" />
            <a href="https://goo.gl/maps/Bot3rHnLzCxNcSPu9" target="_blank" className="text-primary">Poland Warsaw</a>
          </div>
          {/* Second */}
          <div>
            I am currently improving my Java Backend experience and my goal is to become an experienced software engineer. As a developer, I really like to work on my self and create new applications based on my active knowladge.
          </div>
          <div className="my-5 text-center">
            <img src={laptop} alt="laptop" />
            <a href="https://goo.gl/maps/nvdM54W4W9jBfufs7" target="_blank" className="text-primary">Warsaw Złote Tarasy</a>
          </div>
          {/* Third */}
          <div>
            In <span className="here" onClick={() =>{navigate('/eng/projects')}}>here</span> you can find some of my projects.
          </div>
          <div className="my-5 text-center">
            <img src={projects} alt="laptop" />
          </div>
        </section>
        <Footer/>
    </div>
}
export default About;