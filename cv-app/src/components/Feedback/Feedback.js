import { getDomainFromUrl } from "../../utils/helper _functions";
import { Info } from "../Info/Info";
import styles from './Feedback.module.scss';

export function Feedback(props) {
    const data = props.data;
    const listitems = data.map((feedback) =>
        <li key={feedback.reporter.name}>
            <blockquote>
                <Info text={feedback.feedback} />
                <div className={styles.reporter}>
                    <img className={styles.photo} src={feedback.reporter.photoUrl} alt="Reporter"/>
                    <cite>{`${feedback.reporter.name}, `}
                    <a href={feedback.reporter.citeUrl}>{getDomainFromUrl(feedback.reporter.citeUrl)}</a>
                    </cite>
                </div>
            </blockquote>
        </li>
    )
    return (
        <ul>
            {listitems}
        </ul>
    )
}
