import Header from "../features/app/Header";

function HomePage() {
  return (
    <div>
      <div className="logo-box">
        <div className="homepage-header">
          <div className="header-logo-text">
            <h1>GUARDRAILS</h1>
          </div>
          <a href="/login">Log In</a>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
