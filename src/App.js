import { Navigate, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/Home/Home';
import MealDetail from './components/MealDetail/MealDetail';

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="meals/:id" element={<MealDetail />} />
        <Route path="*" element={<Navigate to="/" />} />    
      </Routes>
    </div>
  );
}

export default App;
