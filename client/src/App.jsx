import "./App.css";
import { HashRouter, Routes, Route } from "react-router-dom";
import { TaskProvider } from "./context/TaskProvider";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import LogIn from "./pages/LogIn";
import Home from "./pages/Home";
import { useState } from "react";

function App() {
    const [darkMode, setDarkMode] = useState(false);

    return (
        <TaskProvider>
            <HashRouter>
                <div className={darkMode ? "app dark" : "app"}>
                    <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />

                    <main className="content-area">
                        <Routes>
                            <Route path="/" element={<Home />} />
                            <Route path="/login" element={<LogIn />} />
                        </Routes>
                    </main>

                    <Footer />
                </div>
            </HashRouter>
        </TaskProvider>
    );
}

export default App;
