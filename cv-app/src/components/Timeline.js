export function Timeline(props) {
    const data = props.data;
    const listitems = data.map((entry) =>
        <li>
            <div className='timeline-date'>
                {entry.date}
            </div>
            <div className='timeline-description info'>
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
        <ul className='timeline'>
            {listitems}
        </ul>
    )
}