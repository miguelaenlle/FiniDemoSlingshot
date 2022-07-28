import styles from "./SectionWrapper.module.css"
import * as React from "react"
const SectionWrapper: React.FC<{ children: React.ReactNode; color?: string }> = (props) => {
    return (
        <div className={styles.section} style={{ backgroundColor: props.color }}>
            <div className={styles.contentArea}>
                {props.children}
            </div>
        </div>
    );
}
export default SectionWrapper