import "../styles/LogIn.css";

function LogIn() {
    const handleSubmit = (e) => {
        e.preventDefault();
        // Logic will go here later
    };

    return (
        <div className="login-page">
            <div className="login-card">
                <div className="login-header">
                    <h2>Welcome Back</h2>
                    <p>Log in to manage your productivity</p>
                </div>
                
                <form className="login-form" onSubmit={handleSubmit}>
                    <div className="input-group">
                        <label htmlFor="username">Username or Email</label>
                        <input
                            type="text"
                            id="username"
                            className="login-input"
                            placeholder="e.g. alex@example.com"
                            required
                        />
                    </div>

                    <div className="input-group">
                        <label htmlFor="password">Password</label>
                        <input
                            type="password"
                            id="password"
                            className="login-input"
                            placeholder="••••••••"
                            required
                        />
                    </div>

                    <button type="submit" className="login-btn">
                        Continue
                    </button>
                </form>

                <div className="login-footer">
                    <span>Don't have an account?</span>
                    <a href="#" className="signup-link">Sign Up</a>
                </div>
            </div>
        </div>
    );
}

export default LogIn;
