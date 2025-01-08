import React, { useState } from 'react'
import styles from "./signUp.module.css"
import { Link, useNavigate } from 'react-router-dom';

function SignUp() {

  const navigate = useNavigate();

  const routeSignUp = () => {
    navigate("/login")
  }

  return (
    <div className={styles.container}>
        <form>
            <input type="email" placeholder='Email' />
            <input type="password" placeholder='Password' />
            <input type="password" placeholder='Confirm password' />
            <div className={styles.buttonWrapper}>
                <button onClick={routeSignUp}>Sign up</button>
            </div>
            <p>Already have an account? <Link to="/login" >Login here</Link></p>
        </form>
    </div>
  )
}

export default SignUp