import styles from './Experience.module.scss';

export function Experience({ data }) {
    return (
        <div>
            <ul className={styles.experience_list} data-testid="experience_list">
                {data.map((entry) =>
                    <li key={`${entry.date}_${entry.info.company}`}>
                        <div className={styles.date}>
                            <h3>{entry.info.company}</h3>
                            <div>{entry.date}</div>
                        </div>
                        <div>
                            <h3>{entry.info.job}</h3>
                            <p>{entry.info.description}</p>
                        </div>
                    </li>
                )}
            </ul>
        </div>
    )
}