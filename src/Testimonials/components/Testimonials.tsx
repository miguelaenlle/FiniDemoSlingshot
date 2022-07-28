import styles from "./Testimonials.module.css"
import * as React from "react"
import Testimonial from "./Testimonial";
const Testimonials: React.FC<{}> = (props) => {
    return (
        <section
            className={styles.testimonials}
        >
            <h1>
                See what our customers have to say
            </h1>
            <br />
            <Testimonial />
        </section>
    );
}
export default Testimonials