import { Routes, Route } from 'react-router-dom';
import Home from './COMPONENT/pages/Home';
import Menu from './Menu';
import './CSS/App.css';
function App() {
  return (
    <div>
        <Menu />
        <Routes>
           <Route path="/" element={<Home />} />
        </Routes>
    </div>
  );
}
export default App;
 