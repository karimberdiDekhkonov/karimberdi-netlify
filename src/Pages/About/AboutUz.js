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
        <section className="about text-center">MEN HAQIMDA</section>
        <section className="ln-1">
          {/* First */}
          <div>
            Men Karimberdi Dekhkonov, 20 yoshli dastur muhandisi Farg'onalik (O'zbekiston), hozirda Polshaning Varshava shahrida istiqomat qilaman.  
          </div> <br /> <br />
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
            Men hozirda Java Backend tajribamni takomillashtiryapman va mening maqsadim tajribali dasturiy ta'minot muhandisi bo'lishdir. Dasturchi sifatida men o'z ustimda ishlashni va faol bilimlarim asosida yangi ilovalar yaratishni juda yaxshi ko'raman.
          </div>
          <div className="my-5 text-center">
            <img src={laptop} alt="laptop" />
            <a href="https://goo.gl/maps/nvdM54W4W9jBfufs7" target="_blank" className="text-primary">Warsaw Złote Tarasy</a>
          </div>
          {/* Third */}
          <div>
          <span className="here" onClick={() =>{navigate('/uzb/projects')}}>Bu yerda</span> mening ba'zi loyihalarimni topishingiz mumkin.
          </div>
          <div className="my-5 text-center">
            <img src={projects} alt="laptop" />
          </div>
        </section>
        <Footer/>
    </div>
}
export default About;