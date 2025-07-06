import "./sp.css";

export default function StaticPage()
{
  return (
    <>
      <h1>My Static Page</h1>

      <main className="sp-body">
        <h2>Fun facts about React</h2>

        <ul>
            <li>Was first release in 2013</li>
            <li>Was originally created by Jordan Walke</li>
            <li>Has well over 200K stars on GitHub</li>
            <li>Is maintained by Meta</li>
            <li>Powers thousands of enterprise apps, including mobile apps</li>
        </ul>

        <footer>
          <small>&copy;2025 Elyte Technologies. All rights reserved!</small>
        </footer>
      </main>
    </>
  );
}

