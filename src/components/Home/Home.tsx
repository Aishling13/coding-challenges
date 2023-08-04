import { Link } from "react-router-dom";
import '../Home/Home.css'

const Home = () => {
  return (
    <div className="App">
      <ul className="list-container">
        <li>
          <Link to="/">
              Home
          </Link>
        </li>
        <li>
          <Link to="/imagegen">
              Image Generator
          </Link>
        </li>
        <li>
          <Link to="*">
              No Page
          </Link>
        </li>
      </ul>
    </div>
  )
}

export default Home;