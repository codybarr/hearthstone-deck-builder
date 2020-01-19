import React from 'react'

function Register() {
	return (
		<main class="register">
			<div class="register-inner">
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
