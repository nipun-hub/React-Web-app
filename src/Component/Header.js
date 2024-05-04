import image1 from "../images/decoration-star.svg";
import imageHed from "../images/header.png";

function Header() {
  if (localStorage.getItem("email")) {
    window.location.href = "/Home";
  }
  return (
    <header id="header" className="header">
      <img className="decoration-star" src={image1} alt="alternative" />
      <img className="decoration-star-2" src={image1} alt="alternative" />
      <div className="container">
        <div className="row">
          <div className="col-lg-7 col-xl-5">
            <div className="text-container">
              <h1 className="h1-large">Welcome Learn Science</h1>
              <p className="p-large">
                Science is a rigorous endeavor that seeks to understand the
                natural world through observation, experimentation, and the
                development of evidence-based explanations.
              </p>
              <a className="btn-solid-lg" href="login">
                Login
              </a>
              <a className="btn-outline-lg" href="Register">
                Register
              </a>
            </div>
          </div>
          <div className="col-lg-5 col-xl-7">
            <div className="image-container">
              <img className="img-fluid" src={imageHed} alt="alternative" />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
