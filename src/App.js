//---- imports ! ----//
import './App.css';
import { Routes, Route } from 'react-router-dom'
import SignIn from './components/SignIn';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">

    {/* Header displays below */}

    {/* render routes below  */}
      <Routes>
        <Route path='/' element={<SignIn />}/>
      </Routes>

{/* Footer displays below */}
      <Footer />
    </div>
  );
}

export default App;
