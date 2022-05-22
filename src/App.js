//---- imports ! ----//
import './App.css';
import { Routes, Route } from 'react-router-dom'
import SignIn from './components/SignIn';

function App() {
  return (
    <div className="App">
  
 {/* render routes below  */}

    <Routes>
      <Route path='/' element={<SignIn />}/>
    </Routes>

    </div>
  );
}

export default App;
