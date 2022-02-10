import { Navigation } from "./Navigation";
import { PhotoBox } from "./PhotoBox";
import { Button } from "./Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';;


export function Panel(props) {
    return (
        <div className='panel'>
            <div>
                {<PhotoBox size='small' name="John Doe" avatar="http://avatars0.githubusercontent.com/u/246180?v=4" />}
                </div>
            <div>
                {<Navigation />}
            </div>
            <div className='empty'></div>
            <div>
                {<Button icon={<FontAwesomeIcon icon={faChevronLeft} />} text="Go back"/>}
            </div>
        </div>
    )
}