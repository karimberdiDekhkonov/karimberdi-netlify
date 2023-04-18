import React from "react";
import './Business.scss'
import Footer from "../../components/Footer";
import order from "./order.webp"
import hire from "./hire.jpg"
import join from "./join.jpg"


function Business(){
    return <div id="animation" className="container-sm text-center d-flex justify-content-center mt-4 mb-4">
      <div className="container-sm">
        <section className="text-center business">
          BUSINESS
        </section>
        <section className="d-flex flex-column gap-4">
            <div className="order d-flex shadow-lg p-3 mb-5 bg-body-tertiary rounded">
                <div className="left-business">
                <img src={order} alt="order" />
                </div>
                <div className="text-start right-business d-flex flex-column">    
                  <div>
                    <p className="question">Why would a business need a website?</p>
                    <ul>
                        <li>Sell Products.</li>
                        <li>Sell Services.</li>
                        <li>Build An Online Presence.</li>
                        <li>Showcase Authority And Establish Trust.</li>
                        <li className="answer">It allows you to promote your product, build credibility, distinguish yourself, and quite frankly - compete.</li>
                    </ul>
                  </div>
                  <div>
                    <p className="question">Why would a business need a telegram bots?</p>
                    <ul>
                        <li className="answer">They can provide automated responses, increase user engagement and save costs.</li>
                        <li>24/7 Customer Support</li>
                    </ul>
                  </div>
                  <a className="mail" href="mailto:karimberdidekhkonov0921@gmail.com">
                    <button className="order-btn">
                      ORDER NOW
                    </button>
                  </a>
                </div>   
            </div>
            <div className="order d-flex shadow-lg p-3 mb-5 bg-body-tertiary rounded">
                <div className="left-business">
                <img src={hire} alt="order" />
                </div>
                <div className="text-start right-business d-flex flex-column">    
                  <div>
                    <p className="question">Why should you hire me?</p>
                    <ul>
                        <li>I will try my best level or add value in your company.</li>
                        <li>I have good communication skills.</li>
                        <li>My expertise and knowledge as per company's required.</li>
                        <li> I am ready to learn new things.</li>
                        <li>I am a fresher.</li>
                    </ul>
                  </div>
                  <a className="mail" href="mailto:karimberdidekhkonov0921@gmail.com">
                    <button className="order-btn">
                       HIRE NOW
                    </button>
                  </a>
                </div> 
            </div>
            <div className="order d-flex shadow-lg p-3 mb-5 bg-body-tertiary rounded">
                <div className="left-business">
                <img src={join} alt="order" />
                </div>
                <div className="text-start right-business d-flex flex-column">    
                  <div>
                    <p className="question">Why you should join our team?</p>
                    <ul>
                        <li>Can have an environment to growth.</li>
                        <li>Being able to fill out your portfolio with real projects.</li>
                        <li>Turn your knowledge into real projects.</li>
                        <li>Increase your comunication skills.</li>   
                    </ul>
                  </div>
                  <div>
                    <p className="question">Who can join there?</p>
                    <ul>
                        <li className="answer">Bootcamp or recent university graduate.</li>
                    </ul>
                  </div>
                  <a className="mail" href="mailto:karimberdidekhkonov0921@gmail.com">
                    <button className="order-btn">
                       JOIN NOW
                    </button>
                  </a>
                </div>  
            </div>
        </section>
        <Footer/>
      </div>
    </div>
}
export default Business;