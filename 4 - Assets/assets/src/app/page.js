import Loading from "./loading";
import styles from "./page.module.css";
import AnimatedLoading from "./components/loading-framer";
export default function Home() {
  return (
    <div className={styles.page}>
      <Loading />
      <AnimatedLoading />
    </div>
  );
}
