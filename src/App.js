import './App.css';
import { GlobalStyle } from './globalStyles';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import { Navbar } from './components';
import Home from './pages/Home/Home';



function App() {
  return (
    <div className="App">
      <Router>
        <GlobalStyle />
        <Navbar />
        <Routes>
          <Route path='/' exact element={<Home />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
