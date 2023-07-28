import { useState } from 'react'
import './App.css'
import Header from './components/header'
import ColorBTN from "./components/UI/buutons/ColorBTN"
import SponsorBlock from './components/UI/sponsors/sponsor-block'
import SpecialBlock from './components/specialBlock'
 function App() {
  let [images , setImages ] = useState([    
    {image : "../AE.png"},
    {image:"../Apple.png"},
    {image : "../Discover.png"},
    {image : "../Master.png"},
    {image : "../Visa.png"},
    {image : "../Paypal.png"},
  
  ])

  
  let maincolor1 = "white"
  let mainColor2 = "#B89FFF"
  
   return (
     <>
    <Header></Header>
      <main>
        <div className="conteiner main__content">
          <div className="info-block">
          <h1 className='info-block__title'>Your <span>Money</span>  at 
          Your Fingertips</h1>
            <p className="info-block__subTitle">
            Online banking, the way to bank that’s good for you and good for the
            planet (without ever having to leave the house to make a transaction).
            </p>
          <div className="info-block__buttons">
              <div className="info-block__button_1">
                  <ColorBTN height={"60px"} width={"170px"} btncolor={mainColor2} value={"Get Start"}></ColorBTN>
              </div>
              <div className="info-block__button_2">
                <ColorBTN height={"60px"} width={"170px"} btncolor={maincolor1} value ={"More Details"}></ColorBTN>
              </div>
            </div> 
            <div className="moreInfo">
                <div className="moreInfo__sections">
                  <div className="moreInfo__section1 moreInfo__section">
                    <div className="moreInfo__section-num">18m+</div>
                    <div className="moreInfo__section-text">Happy <br /> Customers</div>
                  </div>
                  <div className="moreInfo__section2 moreInfo__section">
                    <div className="moreInfo__section-num">10m+</div>
                    <div className="moreInfo__section-text">Years of <br /> Experience</div>
                  </div>
                  <div className="moreInfo__section3 moreInfo__section">
                    <div className="moreInfo__section-num">20m+</div>
                    <div className="moreInfo__section-text">Awards <br /> Won</div> 
                  </div>
                </div>
            </div>
          </div>
          <div className="image-block">
              <div className="image-block__main">
            
              </div>
              <div className="image-block-btn">
              <ColorBTN height={"60px"} width={"170px"} btncolor={mainColor2} value={"Grow. Earn."}></ColorBTN>
              </div>
          </div>
        </div>
        <SponsorBlock arr = {images}></SponsorBlock>
        <div className="SpecialFeatures">
          <div className="conteiner">
          <h2 className='SpecialFeatures__title'>Special features</h2>
          <div className="SpecialFeatures__blocks">
              <SpecialBlock value={"FDIC insured"}></SpecialBlock>
              <SpecialBlock value={"No transaction fees. Ever."}></SpecialBlock>
              <SpecialBlock value={"2 day early mobile deposit"}></SpecialBlock>
              <SpecialBlock value={"Financial management tools"}></SpecialBlock>
          </div>
          </div>
        </div>

        

      </main>
     </>
   )
 }

export default App
