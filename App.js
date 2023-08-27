import Navbar from './Components/Navbar';
import Banner from './Components/Banner';
import Movies from './Components/Movies';
import Favourite from './Components/Favourite';
import { BrowserRouter as Router,Routes,Route,BrowserRouter } from 'react-router-dom';
import './App.css';


function App() {
  return (
   <Router>
   <Navbar/>
   <Routes>
   <Route path='/favourites' Component={Favourite}/>
    <Route path='/' exact element = 
    {<>
      <Banner />
      <Movies />
      </>
    }
      />
    
   </Routes>
   {/* <Banner/>
   <Movies/> */}
   {/* <Favourite/> */}
   </Router>
  );
}

export default App;
