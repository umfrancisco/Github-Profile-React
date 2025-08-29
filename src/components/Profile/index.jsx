import styles from './Profile.module.css'

const Profile = ({userName}) => {
    return (
        <header className={styles.header}>
            <div>
                <img className={styles.avatar} src={`https://github.com/umfrancisco.png`}></img>
                <h2 className={styles.name}>{userName}</h2>
            </div>
            <img src="https://github-readme-stats.vercel.app/api/top-langs/?username=umfrancisco&layout=compact&langs_count=7&theme=dracula"/>
        </header>
    )
}

export default Profile;