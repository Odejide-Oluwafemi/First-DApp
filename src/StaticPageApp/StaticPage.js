import "./sp.css";

export default function StaticPage()
{
  return (
    <>
      <h1>My Static Page</h1>

      <main className="sp-body">
        <NavBar />

        <div className="main-content">
          <h2>Fun facts about React</h2>

          <ul>
              <li>Was first release in 2013</li>
              <li>Was originally created by Jordan Walke</li>
              <li>Has well over 200K stars on GitHub</li>
              <li>Is maintained by Meta</li>
              <li>Powers thousands of enterprise apps, including mobile apps</li>
          </ul>
        </div>

        <footer>
          <small>&copy;2025 Elyte Technologies. All rights reserved!</small>
        </footer>
      </main>
    </>
  );
}

function NavBar()
{
  return(
    <>
      <nav className="navbar">
        <span className="navbar-list-items">
          <img src="logo.png" width="60px" alt="React Logo"/>
          <span>ReactFacts</span>
        </span>

        <span className="navbar-list-items">
          <li>Home</li>
          <li>Pricing</li>
          <li>Contact Us</li>
        </span>
      </nav>
    </>
  );
}