import Button from "@/components/Button";
import styles from "./page.module.css";
export default function Home() {
  return (
    <div className={styles.page}>
    <Button name="ML" />
    <Button name="Web Development" />
    </div>
  );
}
