import { useState } from 'react'
import { Outlet, Link, useNavigate } from "react-router-dom";

function App() {
    const navigate = useNavigate()
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    async function createJournal() {

        const content = 'placeholder'
        const response = await fetch('http://localhost:5000/api/create', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                email,
                content, //might need change
            })
        })

        const data = await response.json()
        console.log(data)
    }

    async function loginUser(event) {
        event.preventDefault()

        const response = await fetch('http://localhost:5000/api/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                email,
                password,
            })
        })

        const data = await response.json()
        if (data.user) {
            alert('Login Successful')
            createJournal()
            navigate('/journal')
        } else {
            alert('Login Failed')
        }
        console.log(data)
    }

    return <div>
        <h1>Login</h1>
        <form onSubmit={loginUser}>
            <input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                type="email"
                placeholder="Email"
            />
            <br />
            <input
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                type="password"
                placeholder="Password"
            />
            <br />
            <input type="submit" value="Login" />
        </form>
        <Link to="/register">Register</Link>
        <Outlet />
    </div>
}

export default App;