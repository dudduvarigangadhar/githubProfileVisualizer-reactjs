import {Link} from 'react-router-dom'
import './index.css'

const Header = () => (
  <div className="headerDivContainer">
    <div className="header-container">
      <h3 className="headingRoute"> Github Profile Visualizer</h3>
      <ul className="categories">
        <Link to="/" className="list-item-link">
          <li className="home">Home</li>
        </Link>
        <Link to="/repository" className="list-item-link">
          <li className="repository">Repositories</li>
        </Link>
        <Link to="/analysis" className="list-item-link">
          <li className="analysis">Analysis</li>
        </Link>
      </ul>
    </div>
  </div>
)

export default Header
