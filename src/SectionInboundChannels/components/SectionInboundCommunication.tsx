import styles from "./SectionInboundCommunication.module.css"
import * as React from "react"
import LogoItem from "../../Hero/components/LogoItem";
import { COMPANY_NAMES } from "../constants/company-names";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import SectionWrapper from "../../shared/components/SectionWrapper";

const itemContainerVariants = {
    hidden: {
        opacity: 0,
        y: 30
    },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.7,
            staggerChildren: 0.1
        },
    },
};

const SectionInboundCommunication: React.FC<{}> = (props) => {


    const controls = useAnimation();
    const [ref, inView] = useInView();

    React.useEffect(() => {
        if (inView) {
            controls.start("visible");
        }
    }, [controls, inView]);

    return (
        <SectionWrapper color="#fff">
            <div className={styles.content}>
                <h2>All your inbound communication in one place</h2>
                <p>Let customers connect with you on the channel they love - Fini integrates with all your inbound customer communication channels.</p>

            </div>
            <br />
            <motion.div
                animate={controls}
                initial={"hidden"}
                variants={itemContainerVariants}
                className={styles.companyList}
            >
                {COMPANY_NAMES.map((companyName, index) => {
                    return <LogoItem key={`company-${index}`} itemName={`${companyName}-min`} />

                })}
            </motion.div>
            <br ref={ref} />
        </SectionWrapper>
    );
}
export default SectionInboundCommunication