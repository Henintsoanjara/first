import { Routes, Route } from 'react-router-dom';
import Home from './COMPONENT/pages/Home';
import Menu from './Menu';
import './CSS/App.css';
import Login from './COMPONENT/pages/Login';
import Signin from './COMPONENT/pages/Signin';
function App() {
  return (
    <div>
        <Menu />
        <Routes>
           <Route path="/" element={<Home />} />
           <Route path='/COMPONENT/pages/Login' element={ <Login/>}/>
           <Route path='/COMPONENT/pages/Signin' element={ <Signin/>}/>
        </Routes>
    </div>
  );
}
export default App;
 