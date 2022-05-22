//---- imports ! ----//
import './App.css';
import { Routes, Route } from 'react-router-dom'
import SignIn from './components/SignIn';
import Footer from './components/Footer';
import Profile from './components/Profile';

function App() {
  return (
    <div className="App">

    {/* Header displays below */}

    {/* render routes below  */}
      <Routes>
        <Route path='/' element={<SignIn />}/>
        <Route path='/profile/:id' element={<Profile />} />
      </Routes>

{/* Footer displays below */}
      <Footer />
    </div>
  );
}

export default App;
