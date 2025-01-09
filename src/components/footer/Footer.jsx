import React from 'react'
import styles from "./footer.module.css"

function Footer() {
  return (
    <div className={styles.container}>
        <div className={styles.wrapper}>
            <div className={styles.information}>
                <p>© 2024 AdvanceNow. London</p>
            </div>
        </div>
    </div>
  )
}

export default Footer