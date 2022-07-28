import styles from "./LocationMap.module.css"
import * as React from "react"

import { useInView } from "react-intersection-observer";
import { motion, useAnimation } from "framer-motion";

const LocationMap: React.FC<{}> = (props) => {

    const controls = useAnimation();
    const [ref, inView] = useInView();

    React.useEffect(() => {
        if (inView) {
            controls.start("visible");
        }
    }, [controls, inView]);

    return (
        <div className={styles.wrapper}>
            <p className={styles.subheader}>Issues/Location</p>
            <div ref={ref} className={styles.mapWrapper}>

                {[...Array(7)].map((x, i) => {
                    return <motion.div
                        key={`map-point-${i}-${Math.random().toString()}`}
                        animate={controls}
                        initial={"hidden"}
                        className={`${styles.point} ${styles[`point${i + 1}`]}`}
                        variants={{
                            hidden: {
                                opacity: 0,
                            },
                            visible: {
                                opacity: 1,
                                transition: {
                                    duration: 0.25,
                                    delay: (i * 0.1),
                                },
                            }
                        }}
                    >
                    </motion.div>
                })}
                <img className={styles.map} src="/assets/map-raw.png" />
            </div>
        </div>
    );
}
export default LocationMap