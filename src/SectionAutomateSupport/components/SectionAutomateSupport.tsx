import styles from "./SectionAutomateSupport.module.css"
import * as React from "react"
import SupportTicket from "./SupportTicket";
import SectionWrapper from "../../shared/components/SectionWrapper";
const SectionAutomateSupport: React.FC<{}> = (props) => {
    return (
        <SectionWrapper color="#f1f1f1">
            <div className={styles.content}>
                <h2>Automate repetitive support ticket tasks</h2>
                <p>Supercharge your agents’ daily productivity by automating repetitive manual workloads. Tagging, routing, and forwarding tickets between systems is fully automated by Fini.</p>
            </div>
            <br />
            <SupportTicket
                user="Sam Altman"
                source="Twitter"
                datetime="Today at 5:21pm"
                userMessage="Hello. I purchased a camera from your online store 2 weeks ago, and it suddenly stopped working . Can I return it to get a new camera ?"
                tags={["Camera", "Stopped", "Working", "New"]}
                supportRep="Paul Graham"
                occupation="Customer Support Specialist"
            />
        </SectionWrapper>
    );
}
export default SectionAutomateSupport