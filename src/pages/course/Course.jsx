import React, { useContext, useEffect, useState } from 'react'
import styles from "./course.module.css"
import Navbar from '../../components/navbar/Navbar'
import Footer from '../../components/footer/Footer'
import courses from '../../data/courses'
import { useParams } from 'react-router-dom'
import UserInformationContext from '../../context/UserInformationContext'

function Course() {

    const params = useParams();
    const courseId = params.id;
    const { enrolledCourses, setEnrolledCourses } = useContext(UserInformationContext)
    const [hasEnrolled, setHasEnrolled] = useState()

    useEffect(() => {
        if(enrolledCourses.includes(courseId)){
            setHasEnrolled(true)
        }
    }, [])


    const enrollCourse = () => {
        if(!enrolledCourses.includes(courseId)){
            setHasEnrolled(true)
            setEnrolledCourses(prev => [...prev, courseId])
        }
    }

    const unEnrollCourse = () => {
        setHasEnrolled(false)
        setEnrolledCourses(prev => {
            return prev.filter(course => course !== courseId)
        })
    }

  return (
    <div className={styles.container}>
        <Navbar />
        <section className={styles.course}>
            <div className={styles.courseWrapper}>
                <h2>{courses[courseId].name}</h2>
                <p>{courses[courseId].description}</p>
                <h5>Modules</h5>
                {courses[courseId].modules.map((module, idx) => {
                    return <p>{module}</p>
                })}
                <div className={styles.buttonWrapper}>
                    {hasEnrolled ? (
                        <button onClick={unEnrollCourse}>Unenroll</button>
                    ) : (
                        <button onClick={enrollCourse}>Enroll</button>
                    )}
                </div>
            </div>
        </section>
        <Footer />
    </div>
  )
}

export default Course