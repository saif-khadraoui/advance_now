import React from 'react'
import styles from "./footer.module.css"

function Footer() {
  return (
    <div className={styles.container}>
        <div className={styles.wrapper}>
            <div className={styles.information}>
                <p>© 2024 - AdvanceNow, Inc. All rights reserved. London</p>
            </div>
            <div className={styles.socialMedia}>
                <p>Instagram | Tiktok | Facebook</p>
            </div>
        </div>
    </div>
  )
}

export default Footer