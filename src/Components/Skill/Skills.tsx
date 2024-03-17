import styles from "@/Components/Skill/Skill.module.css";

interface SkillProps {
  skill: {
    title: string;
  };
}

const Skill: React.FC<SkillProps> = ({ skill }) => {
  return <span className={styles.skill}>{skill.title}</span>;
};

export default Skill;
