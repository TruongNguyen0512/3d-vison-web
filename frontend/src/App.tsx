import { Routes, Route } from 'react-router-dom'
import Homepage from './pages/homepage'
import ContactForm from './pages/contact-page'
import GTouchPage from './pages/gTouch-page'
import './App.css'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/contact" element={<ContactForm />} />
      <Route path="/g-touch" element={<GTouchPage />} />
    </Routes>
  )
}

export default App
