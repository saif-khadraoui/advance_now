import React, { useContext } from 'react'
import styles from "./userCourses.module.css"
import Navbar from '../../components/navbar/Navbar'
import UserInformationContext from '../../context/UserInformationContext'
import Footer from '../../components/footer/Footer';
import courses from '../../data/courses';
import { useNavigate } from 'react-router-dom';

function UserCourses() {
    
    const { enrolledCourses } = useContext(UserInformationContext);
    const navigate = useNavigate();

    const routeCourseContent = (courseId) => {
        navigate(`/account/courseContent/${courseId}`)
    }

  return (
    <div className={styles.container}>
        <Navbar />
        <section className={styles.coursesWrapper}>
            <h1>Your courses</h1>
            <div className={styles.courses}>
                {enrolledCourses.map((courseId, idx) => {
                  return (
                    <div className={styles.course} onClick={() => routeCourseContent(courseId)}>
                      <h3>{courses[courseId].name}</h3>
                      <h6>{courses[courseId].length}</h6>
                    </div>
                  )
                })}
            </div>
        </section>
        <Footer />
    </div>
  )
}

export default UserCourses