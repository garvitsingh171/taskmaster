import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import AddTask from "./pages/AddTask";
import LogIn from "./pages/LogIn";

function App() {
    return (
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
                        <Route path="/login" element={<LogIn />}/>
                    </Routes>
                </main>
                <Footer />
            </div>
        </BrowserRouter>
    );
}
export default App;
