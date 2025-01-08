import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Landing from './pages/Landing/Landing'
import SignUp from './pages/SignUp/SignUp'
import Login from './pages/Login/Login'
import Courses from './pages/courses/Courses'
import Search from './pages/search/Search'
import Course from './pages/course/Course'
import UserInformationContext from './context/UserInformationContext'
import UserCourses from './pages/userCourses/UserCourses'
import CourseContent from './pages/courseContent/CourseContent'
import Skills from './pages/skills/Skills'

function App() {

  const [enrolledCourses, setEnrolledCourses] = useState([])
  const [completedCourses, setCompletedCourses] = useState([])

  return (
    <UserInformationContext.Provider value={{ enrolledCourses, setEnrolledCourses, completedCourses, setCompletedCourses }}>
      <div className='app'>
          <Router>
            <Routes>
              <Route path='/' element={<Landing />} />
              <Route path="/signUp" element={<SignUp />} />
              <Route path='/login' element={<Login />} />
              <Route path="/account/search" element={<Search />} />
              <Route path="/account/course/:id" element={<Course />} />
              <Route path="/account/yourCourses" element={<UserCourses />} />
              <Route path="/account/courseContent/:id" element={<CourseContent />} />
              <Route path="/account/skills" element={<Skills />} />
            </Routes>
          </Router>
      </div>
    </UserInformationContext.Provider>

  )
}

export default App
