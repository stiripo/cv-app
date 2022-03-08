import styles from './EducationTimeline.module.scss';
import infoStyles from '../Info/Info.module.scss';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchEducationData } from '../../features/education/educationSlice';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSyncAlt } from '@fortawesome/free-solid-svg-icons';

export function EducationTimeline() {

    const dispatch = useDispatch();
    const { education } = useSelector(state => state.education);
    const { status } = useSelector(state => state.education);
    const { errorMessage } = useSelector(state => state.education);

    useEffect(() => {
        dispatch(fetchEducationData());
    }, [dispatch]);

    if (status === 'loading') {
        return (
            <div className={styles.icon}>
                <FontAwesomeIcon className={styles.spinning_wheel} icon={faSyncAlt} />
            </div>
        )
    }

    if (status === 'failed') {
        return (
            <div className={styles.error}>
                <p>{errorMessage}</p>
            </div>
        )
    }
    return (
        <ul className={styles.timeline}>
            {education.map((entry) =>
                <li key={`${entry.date}_${entry.title}`} data-testid='education_list'>
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
            )}
        </ul>
    )
}