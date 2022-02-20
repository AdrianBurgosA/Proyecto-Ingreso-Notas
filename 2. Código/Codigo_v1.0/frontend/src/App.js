import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './pages/Login';
import ImportData from './pages/ImportData';
import ImportProfessors from './pages/ImportProfessors';
import RegisterStudent from './pages/RegisterStudent'
import RegisterPeriod from './pages/CreatePeriod'
import AssignationCourseToSchoolYear from './pages/AssignationCourseToSchoolYear';
import AssignationSubjectoToProfessor from './pages/AssignationSubjectToProfessor';
import AssignationCourseToProfessor from './pages/AssignationCourseToProfessor';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
      <Route path="/" element={<Login />} />
        <Route path="/importData" element={<ImportData />} />
        <Route path="/importProfessors" element={<ImportProfessors />} />
        <Route path="/createStudent" element={<RegisterStudent/>}/>
        <Route path="/createSchoolYear" element={<RegisterPeriod/>}/>
        <Route path="/coursesToSchoolYear" element={<AssignationCourseToSchoolYear/>}/>
        <Route path="/subjectToProfessor" element={<AssignationSubjectoToProfessor/>}/>
        <Route path="/courseToProfessor" element={<AssignationCourseToProfessor/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App;
