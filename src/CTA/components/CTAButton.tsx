import styles from "./CTAButton.module.css"
import * as React from "react"
import { ChevronRight } from "@mui/icons-material";
const CTAButton: React.FC<{}> = (props) => {
    const [selected, setSelected] = React.useState(false);

    const handleSelect = () => {
        setSelected(true);
    }

    React.useEffect(() => {
        const timeout = setTimeout(() => {
            setSelected(false);
        }, 5000);
        return () => clearTimeout(timeout);

    }, [selected])

    return (
        <div>
            <div onClick={handleSelect} className={styles.ctaButton}>
                <p>Get started</p>
                <ChevronRight className={styles.clickIcon} />
            </div>
            {selected && (
                <React.Fragment>
                    <p className={styles.interest}>Thanks for your interest! Fini is currently in development, so please check in with us later!</p>

                    <br />
                    <br />
                </React.Fragment>


            )}
        </div>
    );
}
export default CTAButton