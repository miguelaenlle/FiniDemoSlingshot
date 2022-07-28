import styles from "./IssuesReport.module.css"
import * as React from "react"
import { ArrowDownward } from "@mui/icons-material";
import IssueReportTab from "./IssueReportTab";
import IssueTabs from "./IssueTabs";
const IssuesReport: React.FC<{}> = (props) => {
    const [month, setMonth] = React.useState<string>("");

    React.useEffect(() => {
        const date = new Date();
        const month = date.toLocaleString("en-us", { month: "long" });
        setMonth(month);

    }, [])

    return (
        <div className={styles.wrapper}>
            <h2 className={styles.issueReport}>{month} Issues Report</h2>
            <div className={styles.content}>
                <div className={styles.column}>
                    <IssueReportTab
                        label="Total Support Tickets"
                        qt={"104"}
                        change={-22.3}
                    />
                    <IssueTabs />

                </div>
                <div className={styles.column}>
                    <IssueReportTab
                        label="Avg. Time/Ticket"
                        qt={"15m 14s"}
                        change={-32}
                    />
                    <IssueReportTab
                        label="Avg. Customer Satisfaction"
                        qt={"42.24/5"}
                        change={2}
                    />

                </div>

            </div>
        </div>
    );
}
export default IssuesReport