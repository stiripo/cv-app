import './App.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import { Box } from './components/Box';
import { Button } from './components/Button';
import { Info } from './components/Info';
import { Expertise } from './components/Expertise';
import { Feedback } from './components/Feedback';
import { feedback_data, expertise_data } from './utils/constants';
import { Navigation } from './components/Navigation';


function App() {
  return (
    <>
      <Box
        title='About me'
        content='Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque' />
      <Button icon={<FontAwesomeIcon icon={faChevronLeft} />} text="Go back" />
      <Button text='Learn more' />
      <Info text='Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.' />
      <Box
        title='Expertise'
        content={<Expertise data={expertise_data} />} />
      <Box
        title='Feedback'
        content={<Feedback data={feedback_data} />}
      />
      <Navigation />
    </>
  );
}

export default App;
