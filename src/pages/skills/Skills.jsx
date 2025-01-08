import React, { useContext } from 'react'
import styles from "./skills.module.css"
import Navbar from '../../components/navbar/Navbar'
import Footer from '../../components/footer/Footer'
import UserInformationContext from '../../context/UserInformationContext'
import courses from '../../data/courses'

function Skills() {

    const { completedCourses } = useContext(UserInformationContext)

  return (
    <div className={styles.container}>
        <Navbar />
        <section className={styles.skills}>
            <h2>Your skills</h2>
            <div className={styles.skillsWrapper}>
                {completedCourses.map((courseId, idx) => {
                    return (
                        <div className={styles.skill}>
                            <p>Certificate for the course: {courses[courseId].name}</p>
                            {/* <p>Official certification for the course: {courses[courseId].name}</p> */}
                            <p>Time spent learning: {courses[courseId].length}</p>
                        </div>
                    )
                })}
            </div>
        </section>
        <Footer />
    </div>
  )
}

export default Skills