import styles from './Profile.module.css'

const Profile = ({userName}) => {
    return (
        <header className={styles.header}>
            <img className={styles.avatar} src={`https://github.com/${userName}.png`}></img>
            <h2 className={styles.name}>{userName}</h2>
        </header>
    )
}

export default Profile;