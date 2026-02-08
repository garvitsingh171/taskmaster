import "../styles/LogIn.css";

function LogIn() {
    const handleSubmit = (e) => {
        e.preventDefault();
    };

    return (
        <div className="login-page fade-in">
            <div className="login-card">
                <h2>Welcome Back</h2>
                <p>Log in to stay productive</p>

                <form className="login-form" onSubmit={handleSubmit}>
                    <input type="text" placeholder="Email or Username" required />
                    <input type="password" placeholder="Password" required />
                    <button className="login-btn">Continue</button>
                </form>
            </div>
        </div>
    );
}

export default LogIn;
