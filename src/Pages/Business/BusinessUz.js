import React from "react";
import './Business.scss'
import Footer from "../../components/Footer";
import order from "./order.webp"
import hire from "./hire.jpg"
import join from "./join.jpg"


function Business(){
    return <div className="container-sm text-center d-flex justify-content-center mt-4 mb-4">
      <div className="container-sm">
        <section className="text-center business">
          BUZINES
        </section>
        <section className="d-flex flex-column gap-4">
            <div className="order d-flex shadow-lg p-3 mb-5 bg-body-tertiary rounded">
                <div className="left-business">
                <img src={order} alt="order" />
                </div>
                <div className="text-start right-business d-flex flex-column">    
                  <div>
                    <p className="question">Nima uchun biznesga veb-sayt kerak?</p>
                    <ul>
                        <li>Mahsulotlarni sotish.</li>
                        <li>Xizmatlarni sotish.</li>
                        <li>Onlayn mavjudlikni yarating.</li>
                        <li>Mijozlar oldida ishonchli ko'rinish.</li>
                        <li>Bu sizga mahsulotingizni targ'ib qilish, ishonchlilikni oshirish, o'zingizni ajratib ko'rsatish va ochiqchasiga raqobatlashish imkonini beradi.</li>
                    </ul>
                  </div>
                  <div>
                    <p className="question">Nega biznesga telegram botlar kerak?</p>
                    <ul>
                        <li className="answer">Ular avtomatlashtirilgan javoblarni taqdim etadi, foydalanuvchi ishtirokini oshiradi va xarajatlarni tejaydi.</li>
                        <li>24/7 mijozlarni qo'llab-quvvatlash.</li>
                    </ul>
                  </div>
                  <a className="mail" href="mailto:karimberdidekhkonov0921@gmail.com">
                    <button className="order-btn btn btn-danger">
                       HOZIROQ BUYURTMA BERISH
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
                    <p className="question">Nega sizni ishga olishimiz kerak?</p>
                    <ul>
                        <li>Men eng yaxshi darajamni ko'rsataman va kompaniyangizga qo'limdan kelgancha qiymat qo'shaman.</li>
                        <li>Menda yaxshi muloqot qobiliyatlari mavjud.</li>
                        <li>Mening tajribam va bilimim ko'p kompaniyalar talabiga mos keladi.</li>
                        <li>Men har doim yangi narsalarni o'rganishga tayyorman.</li>
                    </ul>
                  </div>
                  <a className="mail" href="mailto:karimberdidekhkonov0921@gmail.com">
                    <button className="order-btn btn btn-danger">
                      HOZIROQ ISHGA OLISH
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
                    <p className="question">Nega men sizning jamoangizga qo'shilishim kerak?</p>
                    <ul>
                        <li>O'sish uchun muhit bo'ladi.</li>
                        <li>Rezumeyingizni haqiqiy loyihalar bilan to'ldirish imkoniyati.</li>
                        <li>O'z bilimlaringizni haqiqiy loyihalarga aylantiring.</li>
                        <li>Muloqot qobiliyatingizni oshirish.</li>   
                    </ul>
                  </div>
                  <div>
                    <p className="question">U erga kim qo'shilishi mumkin?</p>
                    <ul>
                        <li className="answer">Bootcamp yoki yaqinda universitet bitiruvchisi.</li>
                    </ul>
                  </div>
                  <a className="mail" href="mailto:karimberdidekhkonov0921@gmail.com">
                    <button className="order-btn btn btn-danger">
                      HOZIROQ JAMOAGA QO'SHILISH
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