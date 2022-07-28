import styles from "./SectionActionableInsights.module.css"
import * as React from "react"
import IssuesReport from "./IssuesReport";
import LocationMap from "./LocationMap";
import SectionWrapper from "../../shared/components/SectionWrapper";
const SectionActionableInsights: React.FC<{}> = (props) => {
    return (
        <SectionWrapper color="#fff">
            <div className={styles.content}>
                <h2>Gain actionable insights on customer issues</h2>
                <p>Gain actionable, AI-powered insights on what types of issues customers have with your products to enhance customers’ experience.</p>
            </div>
            <br />
            <div className={styles.demo}>
                <LocationMap />
                <IssuesReport />
            </div>
        </SectionWrapper>
    );
}
export default SectionActionableInsights