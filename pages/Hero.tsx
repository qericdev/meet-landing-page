import styles from './../styles/Hero.module.css';

function Hero() : JSX.Element{
    return (
        <div className={styles.container}>
            <img className={styles.logo} alt="meet" src="./../images/logo.svg"/>
            <div className={styles.images}>
                <img alt="people" src="./../images/image-hero-left.png"/>
                <img alt="people" src="./../images/image-hero-right.png"/>
            </div>
            <h1>Group Chat <br/> for everyone</h1>
            <p>Meet makes it easy to connect with others face-to-face virtually and collaborate across any device.</p>
            <div className={styles.buttons}>
                <button className={styles.firstButton}>Download <span>v1.3</span></button>
                <button className={styles.secondButton}>What is it?</button>
            </div>
        </div>
    );
}

export default Hero;