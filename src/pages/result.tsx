import styles from "../styles/Results.module.css";
import { useRouter } from "next/dist/client/router";
import Statistic from "../components/Statistic";
import Button from "../components/Button";

const getPercentual = (value: any) => (value !== undefined ? Number(value) : 0);

interface IProps {}

const Result = ({}: IProps) => {
  const router = useRouter();
  const { total, corrects } = router.query;
  const percentual = Math.round(
    (getPercentual(corrects) / getPercentual(total)) * 100
  );

  return (
    <div className={styles.result}>
      <h1>Final Result</h1>
      <div style={{ display: "flex" }}>
        <Statistic value={total} text={"Questions"} backgroundColor="#FDD60F" />
        <Statistic
          value={corrects}
          text={"Corrects"}
          backgroundColor="#9CD2A4"
        />
        <Statistic
          value={`${String(percentual)}%`}
          text={"Percentual"}
          backgroundColor="#DE6A33"
        />
      </div>
      <Button href="/" text="Try Again" />
    </div>
  );
};

export default Result;
