import React from 'react'
import styles from './Login.module.css'

function Login() {
	return (
		<main className={styles.login}>
			<div className="login-inner">
				<h1>Login</h1>
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
						<input type="submit" value="Login" />
					</div>
				</form>
			</div>
		</main>
	)
}

export default Login
