import styles from "../../styles/Statistic.module.css";

interface IProps {
  value: any;
  text: string;
  backgroundColor?: string;
  fontColor?: string;
}

const Statistic = ({ value, text, backgroundColor, fontColor }: IProps) => {
  return (
    <div className={styles.statistic}>
      <div
        className={styles.value}
        style={{
          backgroundColor,
          color: fontColor,
        }}
      >
        {value}
      </div>
      <div className={styles.text}>{text}</div>
    </div>
  );
};
export default Statistic;
