//---- imports ! ----//
import './App.css';
import { Routes, Route} from 'react-router-dom'
import SignIn from './components/SignIn';
import Header from './components/Header';
import Home from './components/Home';
import Favorites from './components/Favorites';
import Footer from './components/Footer';
import Profile from './components/Profile';
import DogFacts from './components/DogFacts';
import DogList from './components/DogList';
import SignUp from './components/SignUp'
import About from './components/About';
import Planning from './components/Planning';
import Sidebar from './components/Sidebar';

function App() {

  return (
    <div className="App">

    {/* Header displays below */}

    <Header />
    <Sidebar/>
    {/* render routes below  */}
      <div className='body'>
      <Routes>
        <Route path='/signin' element={<SignIn />}/>
        <Route path='/signup' element={<SignUp/>}/>
        <Route path='/dogfacts' element={<DogList />} />
        <Route path='/dogfacts/:id' element={<DogFacts />} />
        <Route path='/favorites' element={<Favorites />} />
        <Route path='/' element={<Home />}/>
        <Route path='/profile/:id' element={<Profile />} />
        <Route path='/about' element={<About/>} />
        <Route path='/planning' element={<Planning />}/>
      </Routes>
      </div>

{/* Footer displays below */}
      <Footer />
    </div>
  );
}

export default App;
