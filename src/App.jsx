import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { TaskProvider } from "./context/TaskProvider";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import AddTask from "./pages/AddTask";
import LogIn from "./pages/LogIn";

function App() {
    return (
        <TaskProvider>
            <BrowserRouter>
                <div className="app-wrapper">
                    <Navbar />
                    <main className="content-area">
                        <Routes>
                            <Route
                                path="/"
                                element={
                                    <h1 className="welcome-text">
                                        Welcome to Task Manager
                                    </h1>
                                }
                            />
                            <Route path="/add" element={<AddTask />} />
                            <Route path="/login" element={<LogIn />} />
                        </Routes>
                    </main>
                    <Footer />
                </div>
            </BrowserRouter>
        </TaskProvider>
    );
}
export default App;
