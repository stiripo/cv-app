import styles from './Timeline.module.scss';
import infoStyles from '../Info/Info.module.scss';

export function Timeline(props) {
    const data = props.data;
    const listitems = data.map((entry) =>
        <li>
            <div className={styles.date}>
                {entry.date}
            </div>
            <div className={`${styles.description} ${infoStyles.info}`}>
                <h3>
                    {entry.title}
                </h3>
                <p>
                    {entry.text}
                </p>
            </div>
        </li>
    )
    return (
        <ul className={styles.timeline}>
            {listitems}
        </ul>
    )
}