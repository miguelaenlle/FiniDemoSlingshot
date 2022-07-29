import styles from "./Testimonial.module.css"
import * as React from "react"
const Testimonial: React.FC<{
    companyID: string;
    content: string;
    personID: string;
    personName: string;
    personTitle: string;
}> = (props) => {
    return (
        <div className={styles.testimonial}>
            <img src={`/assets/clientLogos/${props.companyID}-min.png`} className={styles.logo} />
            <br />
            <p className={styles.text}>"{props.content}"</p>

            <br />
            <div className={styles.gap}></div>
            <div className={styles.personWrapper}>
                <img src={`/assets/people/${props.personID}.jpg`} className={styles.person} />
                <p>{props.personName}, {props.personTitle}</p>
            </div>
        </div>
    );
}
export default Testimonial