import './App.css'
import Employees from './components/Employees'
import Navbar from './components/Navbar'
import { Route, Routes } from 'react-router-dom'

function App() {

  return (
    <Routes>
      <Route path="/" element={<Navbar />} />
      <Route path="/employees" element={<Employees />} />
    </Routes>
  )
}

export default App
