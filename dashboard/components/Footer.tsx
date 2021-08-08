import styles from "../styles/Footer.module.css";

const Footer = (): JSX.Element => {
    return (
        <footer className={styles.footer}>
            <a>
                Powered by{' '}
                <span className={styles.signature}>
                    <a
                        href="https://crazycoder.io/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >Mesut KILINCASLAN</a>
                </span>
            </a>
      </footer>
    );
};

export default Footer;
