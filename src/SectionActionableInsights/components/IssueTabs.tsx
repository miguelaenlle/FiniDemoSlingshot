import styles from "./IssueTabs.module.css"
import * as React from "react"

import { useInView } from "react-intersection-observer";
import { motion, useAnimation } from "framer-motion";

const SAMPLE_TABS = ["Tablet", "Warranty", "Breaking"]

const IssueTabs: React.FC<{}> = (props) => {


    const controls = useAnimation();
    const [ref, inView] = useInView();

    React.useEffect(() => {
        if (inView) {
            controls.start("visible");
        }
    }, [controls, inView]);

    return (
        <div>
            <p className={styles.subheader}>Most Common Tags</p>
            <div ref={ref} className={styles.tags}>
                {SAMPLE_TABS.map((tag, index) => {
                    return (
                        <motion.div
                            animate={controls}
                            initial={"hidden"}
                            variants={{
                                hidden: {
                                    opacity: 0,
                                },
                                visible: {
                                    opacity: 1,
                                    transition: {
                                        duration: 0.4,
                                        delay: (index * 0.2),
                                    },
                                }
                            }}
                            key={`tag-${index}`}
                            className={styles.tag}>
                            <p>{tag}</p>
                        </motion.div>
                    )
                })}
            </div>

        </div>
    );
}
export default IssueTabs