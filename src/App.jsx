import "./App.css";
import { HashRouter, Routes, Route } from "react-router-dom";
import { TaskProvider } from "./context/TaskProvider";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import AddTask from "./pages/AddTask";
import LogIn from "./pages/LogIn";

function App() {
    return (
        <TaskProvider>
            <HashRouter>
                <Navbar />

                <main className="content-area">
                    <Routes>
                        <Route
                            path="/"
                            element={<h1 className="welcome-text">Welcome to Task Master</h1>}
                        />
                        <Route path="/add" element={<AddTask />} />
                        <Route path="/login" element={<LogIn />} />
                    </Routes>
                </main>

                <Footer />
            </HashRouter>
        </TaskProvider>
    );
}

export default App;
