import logo from '../images/mmk.jpeg';

function Navbar() {
    return (
        <nav id="navbar" className="navbar navbar-expand-lg fixed-top navbar-light" aria-label="Main navigation">
            <div className="container">

                <a className="navbar-brand logo-image" href="index.html"><u>Science අපි</u></a>


                <button className="navbar-toggler p-0 border-0" type="button" id="navbarSideCollapse" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="navbar-collapse offcanvas-collapse" id="navbarsExampleDefault">
                    <ul className="navbar-nav ms-auto navbar-nav-scroll">
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="#header">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#content">Content</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#projects">Categories</a>
                        </li>
                    </ul>
                    <span className="nav-item">
                        <a className="btn-outline-sm" href="Logout">Logout</a>
                    </span>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;