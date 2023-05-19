import { Routes, Route } from 'react-router-dom';
import Home from './COMPONENT/pages/Home';
import Menu from './Menu';
import './CSS/App.css';
function App() {
  return (
    <div>
        <Routes>
           <Route path="/" element={<Home />} />
        </Routes>
        <Menu />
    </div>
  );
}
export default App;
 