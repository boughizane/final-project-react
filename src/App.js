import logo from './logo.svg';
import './App.css';
import Nav from './comp/Nav';
import List from './List';
import Add from './Add';
import { Routes,Route} from 'react-router-dom';
import Home from './comp/Home';
import Loogin from './comp/Loogin';
function App() {
  return (
    <div>
         
         <Routes>
        <Route path='/' element={<Loogin/>} />
       <Route  path='/Home' element={<Home/>}/>
       </Routes>
     
    </div>
  );
}

export default App;
