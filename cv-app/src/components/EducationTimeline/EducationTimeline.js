import styles from './EducationTimeline.module.scss';
import infoStyles from '../Info/Info.module.scss';

export function EducationTimeline(props) {
    const data = props.data;
    const listitems = data.map((entry) =>
        <li key={`${entry.date}_${entry.title}`}>
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