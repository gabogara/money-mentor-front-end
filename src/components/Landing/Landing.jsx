import "../../App.css"; // from components/Landing/

import { Link } from "react-router-dom";

const Landing = () => {
  return (
    <div className="auth-page">
      <header className="auth-header">
        <div className="brand">Money Mentor</div>
        {/* <nav>
          <Link to="/sign-in">Sign In</Link>
          <Link to="/sign-up">Sign Up</Link>
        </nav> */}
      </header>

      <main className="auth-container">
        <div className="auth-card">
          <h1>Track your money. Build better habits.</h1>
          <p className="subtitle">
            Track income, expenses, and savings while earning points and motivation.
          </p>
            
          <div className="buttons">
            <Link className="primary-btn" to="/sign-up">
              Get Started 
            </Link>
           <section className="testimonials">
  <h2>Why users like Money Mentor</h2>

  <div className="testimonial-grid">
    <div className="testimonial-card">
      <p>
        “Money Mentor makes it easy to see where my money goes each month.”
      </p>
      <span>- Sarah</span>
    </div>

    <div className="testimonial-card">
      <p>
        “Tracking expenses helped me feel more in control of my finances.”
      </p>
      <span>- Angelika</span>
    </div>

    <div className="testimonial-card">
      <p>
        “The points and progress levels make saving feel motivating.”
      </p>
      <span>- Gabriel</span>
    </div>
  </div>
</section>

          </div>
        </div>
      </main>
    </div>
  );
};

export default Landing;
