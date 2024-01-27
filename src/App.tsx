import React from 'react'
import './App.scss'
import { Route, Routes, BrowserRouter, Navigate } from 'react-router-dom'
import SurveyComponent from './components/SurveyComponent'
import SurveyComplete from './pages/SurveyComplete'

function App() {
  return (
    <div className="app">
      <div className="app-main-content">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Navigate to="/survey" />} />
            <Route path="/survey" element={<SurveyComponent />} />
            <Route path="/survey-complete" element={<SurveyComplete />} />
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  )
}

export default App
