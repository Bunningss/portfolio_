import { FC } from "react";
import styles from "./TimelineItem.module.css";
import Link from "next/link";
import { ProjectProps } from "@/utils/types";

interface TimelineItemProps {
  project: ProjectProps;
}

const TimelineItem: FC<TimelineItemProps> = ({ project }) => {
  return (
    <Link href={project.url} target="_blank" className={styles.timelineItem}>
      <div className={styles.timelineDateWrapper}>
        <p className={styles.timelineDate}>{project.date}</p>
      </div>
      <div className={styles.timelineBar}>
        <div className={styles.timelineCircle}></div>
      </div>
      <div className={styles.timelineContent}>
        <h4 className={styles.timelineHeader}>{project.title}</h4>
        <p className={styles.timelineDetails}>{project.description}</p>
      </div>
    </Link>
  );
};

export default TimelineItem;
