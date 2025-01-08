import React from 'react'
import styles from "./courses.module.css"
import Navbar from '../../components/navbar/Navbar'
import Footer from '../../components/footer/Footer'
import courses from '../../data/courses'
import { useNavigate } from 'react-router-dom'

function Courses() {

  const navigate = useNavigate();

  const routeCourse = (idx) => {
    navigate(`/account/course/${idx}`)
  }

  return (
    <div className={styles.container}>
        <Navbar />
        <section className={styles.coursesWrapper}>
            <h1>Courses</h1>
            <div className={styles.courses}>
                {courses.map((course, idx) => {
                  return (
                    <div className={styles.course} onClick={() => routeCourse(idx)}>
                      <h3>{course.name}</h3>
                      <h6>{course.length}</h6>
                    </div>
                  )
                })}
            </div>
        </section>
        <Footer />
    </div>
  )
}

export default Courses