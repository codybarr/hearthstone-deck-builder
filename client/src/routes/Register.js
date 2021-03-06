import React from 'react'
import styles from './Register.module.css'

function Register() {
	return (
		<main className={styles.register}>
			<div className="register-inner">
				<h1>Register</h1>
				<form>
					<div>
						<input
							aria-label="email"
							type="email"
							placeholder="email"
						/>
					</div>
					<div>
						<input
							aria-label="password"
							type="password"
							placeholder="password"
						/>
					</div>
					<div>
						<input type="submit" value="Register" />
					</div>
				</form>
			</div>
		</main>
	)
}

export default Register
