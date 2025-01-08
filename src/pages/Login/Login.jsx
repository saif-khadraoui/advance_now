import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import styles from "./login.module.css"

function Login() {

  const navigate = useNavigate()

  const routeHome = () => {
    navigate("/account/search")
  }

  return (
    <div className={styles.container}>
        <form>
            <input type="email" placeholder='Email' />
            <input type="password" placeholder='Password' />
            <div className={styles.buttonWrapper}>
                <button onClick={routeHome}>Login</button>
            </div>
            <p>Don't have an account? <Link to="/signUp">Sign up here</Link></p>
        </form>
    </div>
  )
}

export default Login