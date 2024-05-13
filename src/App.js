//* Packages Imports */
import { BrowserRouter as Router ,Route, Routes } from 'react-router-dom';

//* Components Imports */
import About from './pages/About';
import Homepage from './pages/Homepage';
import Projects from './pages/Projects';

function App() {
  return (
    <Router>
      <Routes>
      <Route path='/' element={<Homepage/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/projects' element={<Projects/>}/>
     </Routes>
    </Router>
  );
}

export default App;
