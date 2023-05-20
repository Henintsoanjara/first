import { Routes, Route } from 'react-router-dom';
import Home from './COMPONENT/pages/Home';
import Menu from './Menu';
import './CSS/App.css';
import Login from './COMPONENT/pages/Login';
function App() {
  return (
    <div>
        <Menu />
        <Routes>
           <Route path="/" element={<Home />} />
        </Routes>
        <Login/>
    </div>
  );
}
export default App;
 