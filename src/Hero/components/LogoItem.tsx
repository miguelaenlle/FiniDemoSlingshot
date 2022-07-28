import styles from "./LogoItem.module.css"
import * as React from "react"
const LogoItem: React.FC<{
    itemName: string;
}> = (props) => {
    return (
        <div className={styles.logoItem}>
            <img src={`/assets/logos/${props.itemName}.png`} />
        </div>
    );
}
export default LogoItem