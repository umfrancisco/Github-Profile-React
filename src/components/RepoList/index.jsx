import { useEffect, useState } from "react";
import styles from './RepoList.module.css';

const RepoList = ({ userName }) => {
    const [repos, setRepos] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        setIsLoading(true);
        fetch(`https://api.github.com/users/umfrancisco/starred`)
        .then(res => res.json())
        .then(resJson => {
            setTimeout(() => {
                setIsLoading(false);
                setRepos(resJson);
            }, 1000);
        })
    }, [userName])

    return (
        <div className="container">
            <h4 className={styles.title}>Selected Projects</h4>
            {isLoading ? (
                <h4 className={styles.title}>Loading...</h4>
            ) : (
                <ul className={styles.list}>
                    {repos.map(repository => (
                        <li className={styles.listItem} key={repository.id}>
                            <div className={styles.itemName}>
                                <b>Name:</b>{repository.name}
                            </div>
                            <div className={styles.itemLanguage}>
                                <b>Language:</b>{repository.language}
                            </div>
                            <a className={styles.itemLink} target="_blank" href={repository.html_url}>Visit project</a>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    )
}

export default RepoList;