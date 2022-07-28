import styles from "./Map.module.css"
import * as React from "react"
const Map: React.FC<{}> = (props) => {
    return (
        <div className={styles.mapWrapper}>
            <img src="/assets/map.png" />
        </div>
    );
}
export default Map