import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ImportData from './pages/ImportData';
import ImportProfessors from './pages/ImportProfessors';

const App = () => {

  return (
  
    <BrowserRouter>

      <Routes>
        <Route path="/importData" element={<ImportData />} />
        <Route path="/importProfessors" element={<ImportProfessors />} />

      </Routes>
    </BrowserRouter>
    
  )
}

export default App;
