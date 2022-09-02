import styles from './../styles/Features.module.css';

function Features() : JSX.Element {
    return (
        <div className={styles.container}>
            <div className={styles.separator}>
                <div></div>
                <p>01</p>
            </div>
            <div className={styles.images}>
                <img alt="woman-in-videocall" src="./../images/image-woman-in-videocall.jpg"/>
                <img alt="women-in-videochatting" src="./../images/image-women-videochatting.jpg" />
                <img alt="image-men-in-meeting" src="./../images/image-men-in-meeting.jpg"/>
                <img alt="image-man-texting" src="./../images/image-man-texting.jpg" />
            </div>
            <div className={styles.description}>
                <h1>Built for modern use</h1>
                <h2>Smarter meetings, all in one place</h2>
                <p>Send messages, share files, show your screen, and record your meetings — all in one workspace. Control who can join with invite-only team access, data encryption, and data export.</p>
            </div>
        </div>
    );
}

export default Features;