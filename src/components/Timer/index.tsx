import { CountdownCircleTimer } from "react-countdown-circle-timer";
import styles from "../../styles/Timer.module.css";

interface IProps {
  duration: number;
  propKey: number;
  timerReached: () => void;
}

const Timer = ({ duration, propKey, timerReached }: IProps) => {
  return (
    <div className={styles.timer}>
      <CountdownCircleTimer
        key={propKey}
        duration={duration}
        size={120}
        isPlaying
        onComplete={timerReached}
        colors={[
          ["#BCE596", 0.33],
          ["#F7B801", 0.33],
          ["#ED827A", 0.33],
        ]}
      >
        {({ remainingTime }) => remainingTime}
      </CountdownCircleTimer>
    </div>
  );
};
export default Timer;
