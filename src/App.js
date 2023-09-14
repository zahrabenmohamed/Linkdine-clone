import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import Login from './components/Login';
import { BrowserRouter as Router ,Routes ,Route  } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>
      <Routes>
        <Route path="/" element={<Login />}>Login</Route>
        <Route path="/home" element={<div><Header /> <Home /></div>} >Home</Route>
        
      </Routes>
      </Router>  
    </div>
  );
}
export default App;
