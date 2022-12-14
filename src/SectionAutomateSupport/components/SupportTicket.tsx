import styles from "./SupportTicket.module.css"
import * as React from "react"

import { useInView } from "react-intersection-observer";
import { motion, useAnimation } from "framer-motion";
import { useIsSmall, useMediaQuery } from "../../shared/helpers/use-media-query";

const SupportTicket: React.FC<{
    user: string;
    source: string;
    datetime: string;
    userMessage: string;
    tags: string[];
    supportRep: string;
    occupation: string;

}> = (props) => {


    const controls = useAnimation();
    const isSmall = useIsSmall();
    const [ref, inView] = useInView();

    React.useEffect(() => {
        if (inView) {
            controls.start("visible");
        }
    }, [controls, inView]);


    const lowercasedTags = props.tags.map(tag => tag.toLowerCase());

    return (
        <motion.div className={styles.supportWrapper}>
            <div className={styles.supportHeader}>
                <p className={styles.headerText}>{props.user}</p>
                <p className={styles.subheaderText}>{props.source} · {props.datetime} </p>
            </div>
            <br />
            <div className={styles.supportContent}>
                <p className={styles.subheaderText}>Message</p>
                <p className={styles.message}>
                    {props.userMessage.split(" ").map((word, index) => {
                        if (lowercasedTags.includes(word.toLowerCase())) {
                            const index = lowercasedTags.indexOf(word.toLowerCase());
                            return <motion.span
                                animate={controls}
                                initial={"hidden"}
                                variants={{
                                    hidden: {
                                        marginRight: "5px",
                                        transition: {
                                            duration: 0.25,
                                        },
                                    },
                                    visible: {
                                        opacity: 1,
                                        color: "#fff",
                                        backgroundColor: "#508DE8",
                                        marginRight: "5px",
                                        paddingRight: "5px",
                                        paddingLeft: "5px",
                                        paddingTop: isSmall ? "0px" : "1px",
                                        paddingBottom: isSmall ? "2px" : "3px",
                                        borderRadius: isSmall ? "3px" : "5px",
                                        transition: {
                                            duration: 0.25,
                                            delay: index * 0.5,
                                        },
                                    }
                                }}
                                key={`word-${index}-${Math.random().toString()}`}>{`${word}`}
                            </motion.span>
                        } else {
                            return <span className={styles.span} key={`word-${index}-${Math.random().toString()}`}>{word} </span>
                        }
                    })}
                </p>
                <br />
                <p className={styles.subheaderText}>Tags</p>
                <br />
                <div className={styles.tags}>
                    {props.tags.map((tag, index) => {
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
                                            duration: 0.25,
                                            delay: (index * 0.5) + 0.1,
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
                <br />
                <motion.p
                    className={styles.assign}
                    animate={controls}
                    initial={"hidden"}
                    variants={{
                        hidden: {
                            opacity: 0
                        },
                        visible: {
                            opacity: 1,
                            transition: {
                                duration: 0.25,
                                delay: (props.tags.length * 0.5) + 0.5
                            },
                        }
                    }}
                >Creating support ticket for <span>{props.supportRep}</span>, {props.occupation}</motion.p>
            </div>
            <div ref={ref}></div>

        </motion.div>
    );
}
export default SupportTicket