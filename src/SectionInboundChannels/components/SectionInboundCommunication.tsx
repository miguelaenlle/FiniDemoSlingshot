import styles from "./SectionInboundCommunication.module.css"
import * as React from "react"
const SectionInboundCommunication: React.FC<{}> = (props) => {
    return (
        <section className={styles.section}>
            <div className={styles.content}>
                <h2>All your inbound communication in one place</h2>
                <br />
                <p>Let customers connect with you on the channel they love - Fini integrates with all your inbound customer communication channels.</p>
            </div>
        </section>
    );
}
export default SectionInboundCommunication