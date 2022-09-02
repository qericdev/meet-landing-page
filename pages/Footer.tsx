import styles from './../styles/Footer.module.css';

function Footer() : JSX.Element {
    return (
        <div className={styles.main}>
            <div className={styles.separator}>
                <div></div>
                <p>02</p>
            </div>
            <div className={styles.container}>
                <div className={styles.content}>
                    <h1>Experience more together</h1>
                    <p>Stay connected with reliable HD meetings and unlimited one-on-one and group video sessions.</p>
                    <button className={styles.firstButton}>Download <span>v1.3</span></button>
                </div>
            </div>
        </div>
    );
}

export default Footer;