export const jobs = [
    {
        date: '2013-2014',
        info: {
            company: 'Google',
            job: 'Front-end developer / php programmer',
            description: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor'
        }
    },
    {
        date: '2012',
        info: {
            company: 'Twitter',
            job: 'Web developer',
            description: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor'
        }
    }
]

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