import styles from "./CTA.module.css"
import * as React from "react"
import CTAButton from "./CTAButton";
const CTA: React.FC<{}> = (props) => {
    return (
        <div className={styles.background}>
            <h1>Ready to supercharge your
                customer experience?</h1>
            <p>Join Fini today to get started.</p>
            <br />
            <br />
            <CTAButton />
        </div>
    );
}
export default CTA