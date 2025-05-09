import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container">
        <Link className="navbar-brand" to="/">MyWebsite</Link>
        <button 
          className="navbar-toggler" 
          type="button" 
          data-bs-toggle="collapse" 
          data-bs-target="#navbarNav" 
          aria-controls="navbarNav" 
          aria-expanded="false" 
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/">หน้าหลัก</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about">เกี่ยวกับเรา</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/services">บริการ</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/contact">ติดต่อเรา</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar