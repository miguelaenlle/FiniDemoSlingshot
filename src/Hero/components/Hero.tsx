import * as React from "react";
import CTAButton from "../../CTA/components/CTAButton";
import styles from "./Hero.module.css";
import Map from "./Map";

const Hero: React.FC<{}> = (props) => {
    return (
        <div className={styles.heroWrapper}>
            <div className={styles.heroContent}>
                <img className={styles.logo} src="/assets/fini.png" />
                <div className={styles.content}>
                    <h1 className={styles.header}>Resolve customer issues <u>10x</u> faster using AI</h1>
                    <p className={styles.description}>Fini is an AI driven solution to collect, analyze, route, and resolve your customer contacts across all your pre-existing channels</p>
                    <CTAButton />
                </div>
            </div>
        </div>
    );
}
export default Hero; 