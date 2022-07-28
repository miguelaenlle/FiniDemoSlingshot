import styles from "./SectionActionableInsights.module.css"
import * as React from "react"
import IssuesReport from "./IssuesReport";
import LocationMap from "./LocationMap";
const SectionActionableInsights: React.FC<{}> = (props) => {
    return (
        <section className={styles.section}>
            <div className={styles.content}>
                <h2>Gain actionable insights on customer issues</h2>
                <p>Gain actionable, AI-powered insights on what types of issues customers have with your products to enhance customers’ experience.</p>
            </div>
            <br />
            <div className={styles.demo}>
                <LocationMap />
                <IssuesReport />
            </div>
        </section>
    );
}
export default SectionActionableInsights