import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './pages/Login';
import HomeScreenAdmin from './pages/HomeScreenAdmin';
import ImportData from './pages/ImportData';
import ImportProfessors from './pages/ImportProfessors';
import RegisterStudent from './pages/RegisterStudent'
import RegisterPeriod from './pages/CreatePeriod'
import AssignationCourseToSchoolYear from './pages/AssignationCourseToSchoolYear';
import AssignationSubjectoToProfessor from './pages/AssignationSubjectToProfessor';
import AssignationCourseToProfessor from './pages/AssignationCourseToProfessor';
import AssignationStudentToCourse from './pages/AssignationStudentToCourse';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/homeScreenAdmin" element={<HomeScreenAdmin />} />
        <Route path="/importData" element={<ImportData />} />
        <Route path="/importProfessors" element={<ImportProfessors />} />
        <Route path="/createStudent" element={<RegisterStudent/>}/>
        <Route path="/createSchoolYear" element={<RegisterPeriod/>}/>
        <Route path="/coursesToSchoolYear" element={<AssignationCourseToSchoolYear/>}/>
        <Route path="/subjectToProfessor" element={<AssignationSubjectoToProfessor/>}/>
        <Route path="/courseToProfessor" element={<AssignationCourseToProfessor/>}/>
        <Route path="/studentToCourse" element={<AssignationStudentToCourse/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App;
