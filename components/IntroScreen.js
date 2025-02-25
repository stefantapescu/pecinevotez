import styles from '../styles/IntroScreen.module.css';

export default function IntroScreen({ onStart }) {
  return (
    <div className={styles.introScreen}>
      <h1 className={styles.title}>Test Politic Românesc 2025</h1>
      <p className={styles.subtitle}>
        Descoperă ce ideologie ți se potrivește pe baza răspunsurilor tale.
      </p>
      <div className={styles.quizImage}>
        <div className={styles.placeholderImage}>🇷🇴</div>
      </div>
      <button onClick={onStart} className={styles.startButton}>
        Începe Testul
      </button>
      <p className={styles.disclaimer}>
        *Acest test este SATIRIC și rezultatele sunt simplificate.
      </p>
    </div>
  );
} 