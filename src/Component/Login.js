import React, { useEffect, useState } from "react";
import image1 from "../images/decoration-star.svg";
import imageHed from "../images/header.png";
import axios from "axios";

// const User = () =>{

// }

function Login() {
  if (localStorage.getItem("email")) {
    window.location.href = "/Home";
  }
  // login form data save
  const [email, setEmail] = useState("");
  const [Pass, setPass] = useState("");
  //   end this

  const [isDisabled, setIsDisabled] = useState(true);

  const checkIt = (data) => {
    setIsDisabled(false);
    if (!data.email || !data.pass) {
      alert("Plece Fill The All");
      setIsDisabled(true);
    } else {
      const payload = {
        email: data.email,
        pass: data.pass,
      };
      axios
        .post("http://127.0.0.1:3001/api/checkIt", payload)
        .then((response) => {
          console.log(response.data);
          if (response.data.massage == "success" && response.data.reusalt) {
            setIsDisabled(true);
            localStorage.setItem("email", data.email);
            alert("success Login");
            window.location.href = "/";
          } else {
            alert("Emain or password Incorrect!");
            setIsDisabled(true);
          }
        })
        .catch((err) => {
          alert("Somthing wront!");
          setIsDisabled(true);
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
          <div className="col-lg-7 col-xl-5 p-5 text-center text-container">
            <h2 class="fw-bold mb-5">Sign In now</h2>
            <form>
              <div className="form-outline mb-4 border-bottom">
                <input
                  type="email"
                  id="form2Example1"
                  className="form-control"
                  onChange={(e) => setEmail(e.target.value)}
                  value={email}
                />
                <label className="form-label" for="form2Example1">
                  Email address
                </label>
              </div>

              <div className="form-outline mb-4 border-bottom">
                <input
                  type="password"
                  autoComplete="off"
                  id="form2Example2"
                  defaultValue=""
                  className="form-control"
                  onChange={(e) => setPass(e.target.value)}
                  value={Pass}
                />
                <label className="form-label" for="form2Example2">
                  Password
                </label>
              </div>

              <div className="row mb-4">
                <div className="col d-flex justify-content-center">
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      autoComplete="off"
                      defaultValue=""
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
                onClick={() => checkIt({ email: email, pass: Pass })}
              >
                Sign in
              </button>
              <p>
                Not a member? <a href="../Register">Sign Up</a> /{" "}
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

export default Login;
