import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ImportData from './pages/ImportData';
import ImportProfessors from './pages/ImportProfessors';
import RegisterStudent from './pages/RegisterStudent'
import RegisterPeriod from './pages/CreatePeriod'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/importData" element={<ImportData />} />
        <Route path="/importProfessors" element={<ImportProfessors />} />
        <Route path="/registerStudent" element={<RegisterStudent/>}/>
        <Route path="/registerPeriod" element={<RegisterPeriod/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App;
