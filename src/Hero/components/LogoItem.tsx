import styles from "./LogoItem.module.css"
import * as React from "react"
import { motion } from "framer-motion"

const itemVariants = {
    hidden: {
        opacity: 0,
    },
    visible: {
        opacity: 1,
        transition: {
            duration: 0.25,
        },
    },
};


const LogoItem: React.FC<{
    itemName: string;
}> = (props) => {
    return (
        <motion.div variants={itemVariants} className={styles.logoItem}>
            <img src={`/assets/logos/${props.itemName}.png`} />
        </motion.div>
    );
}
export default LogoItem