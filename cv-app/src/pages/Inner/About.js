import { Panel } from "../../components/Panel";
import { Box } from "../../components/Box";
import { Timeline } from "../../components/Timeline";
import { timeline_data } from "../../utils/constants";
import { Expertise } from "../../components/Expertise";
import { expertise_data } from "../../utils/constants";
import { Address } from "../../components/Address";
import { Feedback } from "../../components/Feedback";
import { feedback_data } from "../../utils/constants";
import '../../App.scss';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronUp } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-scroll";

export function About() {
    return (
        <div className='about_page'>
            <div className='side-menu'>
                <Panel backToRoute='/'/>
            </div>
            <div className='main-content'>
                <Box
                    title='About me'
                    content='Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque' />
                <Box title='Education' content={<Timeline data={timeline_data} />} />
                <Box
                    title='Experience'
                    content={<Expertise data={expertise_data} />} />
                <Box title='Contacts' content={<Address />} />
                <Box
                    title='Feedback'
                    content={<Feedback data={feedback_data} />}
                />
                <Link className='back-to-top' to='About me' spy={true} smooth={true} duration={1000}>
                    {<FontAwesomeIcon icon={faChevronUp} />}
                </Link>
            </div>
        </div>
    )
}