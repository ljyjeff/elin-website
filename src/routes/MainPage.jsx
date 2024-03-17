import { Outlet, Link } from "react-router-dom";

export default function MainPage() {
    return (
      <>
      <div id="header">
        <nav>
          <ul>
            <li>
              <Link to={`illustration`}>Illustration</Link>
            </li>
            <li>
              <Link to={`comic`}>Comic</Link>
            </li>

            <li>
              <Link to={`realism`}>Realism</Link>
            </li>

            <li>
              <Link to={`childrensbook`}>Children's Book</Link>
            </li>

            <li>
              <Link to={`characterdesign`}>Character Design</Link>
            </li>
          </ul>
        </nav>
      </div>
      <div id="page">
        <Outlet />
      </div>
    </>
    );
  }