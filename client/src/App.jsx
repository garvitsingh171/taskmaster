import "./App.css";
import { HashRouter, Routes, Route } from "react-router-dom";
import { TaskProvider } from "./context/TaskProvider";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import AddTask from "./pages/AddTask";
import LogIn from "./pages/LogIn";
import Home from "./pages/Home";

function App() {
    return (
        <TaskProvider>
            <HashRouter>
                <Navbar />

                <main className="content-area">
                    <Routes>
                        <Route
                            path="/"
                            element={<Home />}
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
