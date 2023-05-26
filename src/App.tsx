
import { Route, Routes } from 'react-router-dom'
import Home from './pages/home'
import Meals from './pages/meals'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/:id" element={<Meals />} />
    </Routes>
  )
}


export default App
