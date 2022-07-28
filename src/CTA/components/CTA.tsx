import styles from "./CTA.module.css"
import * as React from "react"
import CTAButton from "./CTAButton";
import SectionWrapper from "../../shared/components/SectionWrapper";
const CTA: React.FC<{}> = (props) => {
    return (
        <div className={styles.background}>
            <div className={styles.content}>
                <h1>Ready to supercharge your
                    customer experience?</h1>
                <p>Join Fini today to get started.</p>
                <br />
                <br />
                <CTAButton />
            </div>
        </div>
    );
}
export default CTA