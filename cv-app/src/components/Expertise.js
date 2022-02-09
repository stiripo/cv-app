export function Expertise(props) {
    const data = props.data;
    const listitems = data.map((entry) =>
        <li key={entry.date}>
            <div className='expertise-list-date'>
                <h3>{entry.info.company}</h3>
                <div>{entry.date}</div>
            </div>
            <div>
                <h3>{entry.info.job}</h3>
                <p>{entry.info.description}</p>
            </div>
        </li>
    )
    return (
        <div>
            <ul className='expertise-list'>
                {listitems}
            </ul>
        </div>
    )
}