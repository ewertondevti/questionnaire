import styles from "../../styles/Button.module.css";
import Link from "next/link";

interface IProps {
  text: string;
  href?: string;
  onClick?: (e: any) => void;
}

const Button = ({ text, href, onClick }: IProps) => {
  const renderButton = () => (
    <button className={styles.button} onClick={onClick}>
      {text}
    </button>
  );

  return href ? (
    <Link href={href} passHref>
      {renderButton()}
    </Link>
  ) : (
    renderButton()
  );
};
export default Button;
