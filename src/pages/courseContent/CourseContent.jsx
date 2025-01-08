import React, { useContext, useState } from 'react'
import styles from "./courseContent.module.css"
import Navbar from '../../components/navbar/Navbar'
import { useParams } from 'react-router-dom';
import courses from './../../data/courses';
import Footer from '../../components/footer/Footer';
import ReactPlayer from 'react-player'
import UserInformationContext from '../../context/UserInformationContext';
import ProgressBar from "@ramonak/react-progress-bar";

function CourseContent() {

    const params = useParams();
    const courseId = params.id;
    const { completedCourses, setCompletedCourses } = useContext(UserInformationContext)
    const [hasCompleted, setHasCompleted] = useState(false)

    const completeCourse = () => {
        setHasCompleted(true)
        setCompletedCourses(prev => [...prev, courseId])
    }

  return (
    <div className={styles.container}>
        <Navbar />
        <section className={styles.courseContent}>
            <div className={styles.courseContentWrapper}>
                <h2>{courses[courseId].name}</h2>
                <div className={styles.courseContentInformation}>
                    <ReactPlayer url={courses[courseId].videoURL} className={styles.videoPlayer}/>
                    <ProgressBar completed={10} maxCompleted={100} width='300px' bgColor='#26aa1c'/>
                    <button onClick={completeCourse}>{hasCompleted ? "Completed" : "Complete"}</button>
                </div>
            </div>
        </section>
        <Footer />
    </div>
  )
}

export default CourseContent