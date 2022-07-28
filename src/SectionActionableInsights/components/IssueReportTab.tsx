import styles from "./IssueReportTab.module.css"
import * as React from "react"
import { ArrowDownward, ArrowUpward } from "@mui/icons-material";


import { useInView } from "react-intersection-observer";
import { motion, useAnimation } from "framer-motion";

const ISSUE_REPORT_VARIANTS = {
    "hidden": {
        opacity: 0,
        y: -10
    },
    "visible": {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.5,
        }
    }
}

const IssueReportTab: React.FC<{
    label: string;
    qt: string;
    change: number;

}> = (props) => {


    const controls = useAnimation();
    const [ref, inView] = useInView();


    React.useEffect(() => {
        if (inView) {
            controls.start("visible");
        }
    }, [controls, inView]);


    return (
        <div>
            <p className={styles.subheader}>{props.label}</p>
            <div ref={ref} className={styles.dataRow}>
                <p className={styles.dataText}>{props.qt}</p>
                <motion.div
                    animate={controls}
                    initial={"hidden"}
                    variants={ISSUE_REPORT_VARIANTS}
                    className={styles.dataChangeText}
                >
                    <p className={styles.changeText}>{props.change}%</p>
                    {props.change > 0 ? (
                        <ArrowUpward className={styles.changeArrow} />
                    ) : (
                        <ArrowDownward className={styles.changeArrow} />
                    )}
                </motion.div>
            </div>
        </div>
    );
}
export default IssueReportTab