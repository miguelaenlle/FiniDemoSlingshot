import styles from "./Testimonials.module.css"
import * as React from "react"
import Testimonial from "./Testimonial";
import { testimonials } from "../constants/testimonials";
import SectionWrapper from "../../shared/components/SectionWrapper";
const Testimonials: React.FC<{}> = (props) => {
    return (
        <SectionWrapper color="#f1f1f1">
            <h1>
                See what our customers have to say
            </h1>
            <br />
            <div className={styles.testimonialRow}>
                {testimonials.slice(0, 2).map((testimonial, index) => {
                    return (
                        <Testimonial
                            key={`testimonial-${index}`}
                            companyID={testimonial.companyID}
                            content={testimonial.content}
                            personID={testimonial.personID}
                            personName={testimonial.personName}
                            personTitle={testimonial.personTitle}
                        />
                    )

                })}
            </div>
            <div className={styles.testimonialRow}>
                {testimonials.slice(2, 4).map((testimonial, index) => {
                    return (
                        <Testimonial
                            key={`testimonial-${index}`}
                            companyID={testimonial.companyID}
                            content={testimonial.content}
                            personID={testimonial.personID}
                            personName={testimonial.personName}
                            personTitle={testimonial.personTitle}
                        />
                    )

                })}
            </div>
        </SectionWrapper>
    );
}
export default Testimonials