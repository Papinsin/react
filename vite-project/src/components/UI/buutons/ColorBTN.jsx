import React from "react"
import style from  "../buutons/ColorBTN.module.css"///ColorBTN.module.css"
let ColorBTN = (prop) =>{
         
    return (
        <button {...prop} className={style.colorBTN} style={{
            height :prop.height,
            width : prop.width,
            backgroundColor: prop.btncolor 
        }} >
            {prop.value}
        </button>
    )
}
export default ColorBTN