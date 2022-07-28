import styles from "./Hero.module.css"
import * as React from "react"
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import Map from "./Map";

const Hero: React.FC<{}> = (props) => {
    return (
        <div className={styles.heroWrapper}>
            <div className={styles.heroContent}>
                <img className={styles.logo} src="/assets/fini.png" />
                <div className={styles.content}>
                    <h1 className={styles.header}>Resolve customer issues <u>10x</u> faster using AI</h1>
                    <p className={styles.description}>Fini is an AI driven solution to collect, analyze, route, and resolve your customer contacts across all your pre-existing channels</p>
                    <button className={styles.ctaButton}>
                        <p>Get Started</p>
                        <ChevronRightIcon className={styles.clickIcon} />
                    </button>
                </div>
            </div>
            <Map />
        </div>
    );
}
export default Hero; 