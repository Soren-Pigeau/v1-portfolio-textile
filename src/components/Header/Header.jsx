import styles from './Header.module.css';

export default function Header() {
  return (
    <header className={styles.header}>
      <a href="#" className={styles.name}>
        Nom de l'Artiste
      </a>
      <nav className={styles.nav} aria-label="Navigation principale">
        <a href="#oeuvres">Œuvres</a>
        <a href="#contact">Contact</a>
      </nav>
    </header>
  );
}
