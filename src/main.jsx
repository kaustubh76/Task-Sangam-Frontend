import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import App from './App.jsx'
import './index.css'
import JobAvail from './pages/JobAvail'
import PostJobPage from './pages/PostJobPage'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/job" element={<JobAvail/>} />
        <Route path="/post" element={<PostJobPage />} />
      </Routes>
    </Router>
  </StrictMode>,
)
