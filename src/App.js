import Aboutme from './Aboutme';
import './style.css';
import Navbar from './Navbar';
import Projects from './Projects';
import Skills from './Skills';
import Footer from './Footer';

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Aboutme></Aboutme>
      <Projects></Projects>
      <Skills></Skills>
      <Footer></Footer>
    </div>
  );
}

export default App;
