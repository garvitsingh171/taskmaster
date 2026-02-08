import '../App.css';
import { Link } from "react-router-dom";
import TaskList from '../components/TaskList';

function Home() {
    return (
        <section className='home'>
            <div className='home-content'>
                <h1 className='home-title'>Good day 👋</h1>
                <p className='home-subtitle'>
                    Here’s what you need to get done
                </p>
                <div className='home-actions'>
                    <Link to="/add" className='btn primary'>
                    Add a Task
                    </Link>
                    <Link to="/login" className='btn secondary'>
                    Login
                    </Link>
                </div>
            </div>

            <div className='home-divider'></div>

            <div className='home-tasks'>
                <h2 className='section-title'>Your Tasks</h2>
                <TaskList />
            </div>
        </section>
    )
}

export default Home;