import React from "react"
import styles from "../sponsors/sponsor-block.module.css"

let SponsorBlock = ({arr}) =>{
    console.log(arr)
    return(
        <div className="sponsor-block">
            <div className="conteiner" >
                <div className={styles.sponsorBlock__Content}>
                {arr.map((each , index)=> 
                    <img src={each.image} key={index +1 } className={styles.sponsorBlock__img} alt="" />
                )}
                </div>
                
            </div>
    </div>
    )

}
export default SponsorBlock