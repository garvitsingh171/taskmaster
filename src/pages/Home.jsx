import '../App.css';
import { Link } from "react-router-dom";

function Home() {
    return (
        <section className='home'>
            <div className='home-content'>
                <h1 className='home-title'>Task Master</h1>
                <p className='home-subtitle'>
                    Organize your work. Track your progress. Get things done.
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
        </section>
    )
}

export default Home;