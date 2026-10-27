import { BrowserRouter, Routes, Route } from 'react-router'
import Home from './pages/Home.jsx'
import Bmi from './pages/Bmi'
import Bmr from './pages/Bmr'
import Car from './pages/car'


export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Bmi" element={<Bmi />} />
        <Route path="/Bmr" element={<Bmr />} />
        <Route path="/car" element={<Car />} />
      </Routes>
    </BrowserRouter>
  )
}
