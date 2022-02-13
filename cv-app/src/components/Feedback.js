import { getDomainFromUrl } from "../utils/helper _functions";
import { Info } from "./Info";

export function Feedback(props) {
    const data = props.data;
    const listitems = data.map((feedback) =>
        <li>
            <blockquote>
                <Info text={feedback.feedback} />
                <div className='feedback-reporter'>
                    <img className='feedback-photo' src={feedback.reporter.photoUrl} alt="Reporter"/>
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
