import styles from './Profile.module.css'

const Profile = () => {
    return (
        <header className={styles.header}>
            <div>
                <img className={styles.avatar} src={`https://github.com/umfrancisco.png`}></img>
                <h2 className={styles.title}>Francisco Guitler</h2>
                <h2 className={styles.title}>Backend Developer</h2>
                <h2 className={styles.title}><a href="https://github.com/umfrancisco">Github</a></h2>
                <h2 className={styles.title}><a href="https://www.linkedin.com/in/francisco-guitler-1886322b4">Linkedin</a></h2>
            </div>
            {/* <img src="https://github-readme-stats.vercel.app/api/top-langs/?username=umfrancisco&layout=compact&theme=dracula"/> */}
        </header>
    )
}

export default Profile;