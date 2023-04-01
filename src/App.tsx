
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from '../src/pages/Home'
import Registrera from '../src/pages/Registrera'

import './App.css';

import {totalRounds, nmbrShots} from '../src/hooks/useStatHook'

function App() {

  
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/registrera" element={<Registrera />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;


