//---- imports ! ----//
import './App.css';
import { Routes, Route } from 'react-router-dom'
import SignIn from './components/SignIn';
import Footer from './components/Footer';
import Profile from './components/Profile';
import Header from './components/Header'

function App() {
  return (
    <div className="App">

    {/* Header displays below */}
    <Header/>
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
