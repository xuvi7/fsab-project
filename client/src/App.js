import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Login from "./pages/Login"
import Register from "./pages/Register"
import Journal from "./pages/Journal"

const App = () => {
    return (
        <div>
            <BrowserRouter>
                <Routes>
                    <Route path="/login" element={<Login />} />
                    <Route path="/register" element={<Register />} />
                    <Route path="/journal" element={<Journal />} />
                    <Route path="/*" element={<Register />} />
                </Routes>
            </BrowserRouter>
        </div>
    )
}

export default App
