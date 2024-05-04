import { useState } from "react";
import image1 from "../images/decoration-star.svg";
import imageHed from "../images/header.png";
import axios from "axios";

function Register() {
  if (localStorage.getItem("email")) {
    window.location.href = "/Home";
  }

  const [fname, setFname] = useState();
  const [lname, setLname] = useState();
  const [email, setEmail] = useState();
  const [Pass, setPass] = useState();

  const [isDisabled, setIsDisabled] = useState(true);

  const checkIt = (data) => {
    setIsDisabled(false);
    if (data.fname && data.lname && data.email && data.pass) {
      const payload = {
        fname: data.fname,
        lname: data.lname,
        email: data.email,
      };
      axios
        .post("http://127.0.0.1:3001/api/checkIt", payload)
        .then((response) => {
          if (response.data.massage == "success" && !response.data.reusalt) {
            // localStorage.setItem("email", data.email);
            CreateUser({
              fname: data.fname,
              lname: data.lname,
              email: data.email,
              pass: data.pass,
            });
            setIsDisabled(true);
          } else {
            alert("Somthing wront");
            setIsDisabled(true);
          }
        })
        .catch((err) => {
          alert("Somthing wront");
          setIsDisabled(true);
        });
    } else {
      alert("Please Fill The All");
      setIsDisabled(true);
    }
  };

  const CreateUser = (data) => {
    if (data.email && data.pass) {
      const payload = {
        fname: data.fname,
        lname: data.lname,
        email: data.email,
        pass: data.pass,
      };
      axios
        .post("http://127.0.0.1:3001/api/createUser", payload)
        .then((response) => {
          alert("success Register Plece Login Now");
          window.location.href = "/Login";
        })
        .catch((err) => {
          alert("Somthing Wront");
        });
    }
  };
  return (
    <header id="header" className="header">
      <link
        href="https://cdnjs.cloudflare.com/ajax/libs/mdb-ui-kit/7.2.0/mdb.min.css"
        rel="stylesheet"
      />
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
      ></link>
      <img className="decoration-star" src={image1} alt="alternative" />
      <img className="decoration-star-2" src={image1} alt="alternative" />
      <div className="container">
        <div className="row">
          <div className="col-lg-7 col-xl-5 p-5 pt-0 text-center text-container">
            <h2 class="fw-bold mb-5">Sign Up now</h2>
            <form>
              <div className="row">
                <div className="col-12 col-sm mx-2 form-outline mb-4 border-bottom">
                  <input
                    type="email"
                    id="form2Example1"
                    className="form-control"
                    onChange={(e) => setFname(e.target.value)}
                  />
                  <label className="form-label" for="form2Example1">
                    First Name
                  </label>
                </div>
                <div className="col-12 col-sm mx-2 form-outline mb-4 border-bottom">
                  <input
                    type="email"
                    id="form2Example1"
                    className="form-control"
                    onChange={(e) => setLname(e.target.value)}
                  />
                  <label className="form-label" for="form2Example1">
                    Last Name
                  </label>
                </div>

                <div className="form-outline mx-2 mb-4 border-bottom">
                  <input
                    type="email"
                    id="form2Example1"
                    className="form-control"
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  <label className="form-label" for="form2Example1">
                    Email address
                  </label>
                </div>

                <div className="form-outline mx-2 mb-4 border-bottom">
                  <input
                    type="password"
                    id="form2Example2"
                    className="form-control"
                    onChange={(e) => setPass(e.target.value)}
                  />
                  <label className="form-label" for="form2Example2">
                    Password
                  </label>
                </div>
              </div>

              <div className="row mb-4">
                <div className="col d-flex justify-content-center">
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      value=""
                      id="form2Example31"
                    />
                    <label className="form-check-label" for="form2Example31">
                      {" "}
                      Remember me{" "}
                    </label>
                  </div>
                </div>

                <div className="col">
                  <a href="#!">Forgot password?</a>
                </div>
              </div>

              <button
                type="button"
                data-mdb-button-init
                data-mdb-ripple-init
                className={
                  "btn btn-primary btn-block mb-4 " +
                  (!isDisabled ? "btn-disable" : "")
                }
                onClick={() =>
                  checkIt({
                    fname: fname,
                    lname: lname,
                    email: email,
                    pass: Pass,
                  })
                }
              >
                Sign up
              </button>
              <p>
                Not a member? <a href="./Login">Sign in</a> /{" "}
                <a href="./">Home</a>
              </p>
            </form>
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

export default Register;
