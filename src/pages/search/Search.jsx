import React, { useState } from 'react'
import styles from "./search.module.css"
import Navbar from '../../components/navbar/Navbar'
import courses from '../../data/courses'
import { useNavigate } from 'react-router-dom'
import Footer from '../../components/footer/Footer'

function Search() {

    const [searchTerm, setSearchTerm] = useState("")
    const navigate = useNavigate();

    const filteredData = courses.filter(course => 
        course.name.toLowerCase().includes(searchTerm.toLowerCase())
    )

    const routeCourse = (idx) => {
      navigate(`/account/course/${idx}`)
    }

  return (
    <div className={styles.container}>
        <Navbar />
        <div className={styles.wrapper}>
            <h2>Search</h2>
            <div className={styles.searchBarWrapper}>
                <input type="text" placeholder='I want to study' onChange={((e) => setSearchTerm(e.target.value))}/>
            </div>
            <div className={styles.courses}>
                {filteredData.map((course, idx) => {
                    return (
                        <div className={styles.course} onClick={() => routeCourse(idx)}>
                        <h3>{course.name}</h3>
                        <h6>{course.length}</h6>
                        </div>
                    )
                })}
            </div>
        </div>
        <Footer />
    </div>
  )
}

export default Search