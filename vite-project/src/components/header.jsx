import React from "react"
import ColorBTN from "./UI/buutons/ColorBTN"
let Header = () =>{

    let maincolor1 = "#C39BF4"
    let mainColor2 = "#B89FFF"
    return(
        <header>
            <div className="conteiner">
                <div className="header__content">
                <div className="logo">
                        <div className="logo__name">Finace</div>
                </div>
        
                <ul className="bar">
                    <li className="item">Home</li>
                    <li className="item">Features</li>
                    <li className="item">Solutions</li>
                    <li className="item">Compare</li>
                    <li className="item">Pricing</li>
                </ul>
                <ColorBTN height={"60px"} width={"170px"} btncolor={maincolor1} value={"Register Now"}  ></ColorBTN>
                </div>
                </div>

      </header>
    )
}
export default Header