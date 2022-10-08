import Aboutme from './Aboutme';
import './style.css';
import Navbar from './Navbar';
import Sidebar from './Sidebar';
import Projects from './Projects';
import Skills from './Skills';
import Footer from './Footer';

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Sidebar></Sidebar>
      <Aboutme></Aboutme>
      <Projects></Projects>
      <Skills></Skills>
      <Footer></Footer>
    </div>
  );
}

export default App;
