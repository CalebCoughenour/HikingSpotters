import './App.css';
import { GlobalStyle } from './globalStyles';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import { Navbar } from './components';
import Home from './pages/Home/Home';
import Photos from './pages/Photos/Photos';



function App() {
  return (
    <div className="App">
      <Router>
        <GlobalStyle />
        <Navbar />
        <Routes>
          <Route path='/' exact element={<Home />} />
          <Route path='/photos' element={<Photos />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
