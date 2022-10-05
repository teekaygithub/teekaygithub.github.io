import Aboutme from './Aboutme';
import './App.css';
import Navbar from './Navbar';
import Projects from './Projects';

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Aboutme></Aboutme>
      <Projects></Projects>
    </div>
  );
}

export default App;
