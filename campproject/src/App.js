import { Container } from 'semantic-ui-react';
import './App.css';
import Navi from './Layouts/Navi'
import Dashboard from './Layouts/Dashboard';
import 'semantic-ui-css/semantic.min.css'

function App() {
  return (
    <div className="App">
      <Container className='main2'>
        <Navi />
      </Container>
      <Container className='main'>
        <Dashboard />
      </Container>

    </div>
  );
}

export default App;


