import Card from '../components/shared/Card';
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <Card>
      <div className='about'>
        <h1>About this App</h1>
        <p>this is a React app to leave feedback for a product or service</p>
        <p>Version 1.0.0</p>

        <p>
          <Link to='/'>Back to homepage</Link>
        </p>
      </div>
    </Card>
  );
};

export default About;
