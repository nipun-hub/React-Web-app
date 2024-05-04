import axios from "axios";
import image1 from "../images/decoration-star.svg";
import imageHed from "../images/header.png";
import Navbar from "./Navbar";
// import { useEffect, useState } from "react";
import React, { useEffect, useState } from "react";

// let Name = "Hemal aJayawardhana";

const scienceImage = [
  {
    image:
      "https://tse2.mm.bing.net/th?id=OIP.1T51fhTIEmApZddoeDSBIQHaFj&pid=Api&P=0&h=220",
    title: "Physics (fundamental laws)",
    dict: "Physics delves into the fundamental laws governing matter, energy, space, and time. It explores everything from the tiniest subatomic particles to the grandest structures of the cosmos.",
  },
  {
    image:
      "https://tse1.mm.bing.net/th?id=OIP.7qvNv0BPlliCprN4KhnYjAHaFj&pid=Api&P=0&h=220",
    title: "Chemistry (Examines matter)",
    dict: "Chemistry examines the composition, structure, properties, and interactions of matter. It reveals how elements combine to form molecules, leading to new materials and understanding chemical reactions.",
  },
  {
    image:
      "https://tse4.mm.bing.net/th?id=OIP.Byk0BJ8l3wLrArYTSKrsWgHaE8&pid=Api&P=0&h=220",
    title: "Biology (Explores life)",
    dict: "Biology investigates life in all its forms, from the cellular level to complex ecosystems. It explores the intricate processes of living organisms, evolution, and genetics.",
  },
  {
    image:
      "https://tse1.mm.bing.net/th?id=OIP.93ThP1exbvt85T7EoQu7sQHaEo&pid=Api&P=0&h=220",
    title: "Space Sciences (Outside the earth)",
    dict: "Earth science is a captivating branch of natural science that delves into the composition, structure, and dynamic processes that have shaped our planet, Earth. It encompasses a wide range of disciplines, each offering a unique perspective on our home:",
  },
  {
    image:
      "https://tse4.mm.bing.net/th?id=OIP.E4T61qf7Xb_3_009UdsVcwHaEo&pid=Api&P=0&h=220",
    title: "Earth Sciences (Studies Earth)",
    dict: "Gazing at the night sky filled with twinkling stars and celestial wonders has ignited human curiosity for millennia. Space science, a fascinating branch of natural science, strives to answer our questions about the universe beyond Earth. atmosphere. It encompasses a vast array of disciplines, each pushing the boundaries of our knowledge",
  },
  {
    image:
      "https://tse2.mm.bing.net/th?id=OIP.by9IyDZ31MkkbcjCgW1u4gHaFj&pid=Api&P=0&h=220",
    title: "Eletronic (Eletronic items)",
    dict: "Electronic science, also sometimes referred to as electronics engineering, dives into the fascinating world of electrical circuits and the devices that utilize them. It focuses on the design, development, and application of electronic components, systems, and technologies.",
  },
];

const cardData = scienceImage.map(({ image, title, dict }, index) => {
  return (
    <div class="card">
      <img class="img-fluid" src={image} alt="alternative" />
      <div class="card-body">
        <h5 class="card-title">{title}</h5>
        <p class="card-text">
          {dict}
          <a class="blue no-line" href="#">
            ...Read more
          </a>
        </p>
      </div>
    </div>
  );
});

function Home() {
  if (!localStorage.getItem("email")) {
    window.location.href = "/";
  }

  const [UserName, setUserName] = useState("");

  useEffect(() => {
    const email = localStorage.getItem("email");
    console.log(getUser({ email, type: "get user" }));
  }, []);

  const getUser = (data) => {
    const payload = {
      email: data.email,
      type: data.type,
    };
    axios
      .post("http://127.0.0.1:3001/api/getUsers", payload)
      .then((response) => {
        setUserName(
          response.data?.response?.fname + " " + response.data?.response?.lname
        );
      })
      .catch((err) => {
        console.log("error");
      });
  };

  return (
    <>
      <Navbar />
      <header id="header" className="header">
        <img className="decoration-star" src={image1} alt="alternative" />
        <img className="decoration-star-2" src={image1} alt="alternative" />
        <div className="container">
          <div className="row">
            <div className="col-lg-7 col-xl-5">
              <div className="text-container">
                <h1 className="h1-large">Welcome {UserName}</h1>
                <p className="p-large">
                  Science is a rigorous endeavor that seeks to understand the
                  natural world through observation, experimentation, and the
                  development of evidence-based explanations.
                </p>
                <a className="btn-solid-lg" href="#content">
                  Content
                </a>
                <a className="btn-outline-lg" href="Logout">
                  Logout
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

      <div id="content" class="basic-4 bg-gray">
        <div class="container">
          <div class="row">
            <div class="col-lg-12">
              <h4>
                Science education equips us to understand the world (think
                critically!), solve problems (think medicine and technology!),
                and make informed decisions (think climate change!). It fosters
                curiosity, achievement, and a more informed society.{" "}
              </h4>
              <a class="btn-solid-lg" href="#projects">
                Categories
              </a>
            </div>
          </div>
        </div>
      </div>

      <div id="projects" class="cards-2">
        <div class="container">
          <div class="row">
            <div class="col-lg-12">
              <h2 class="h2-heading">Categories of science</h2>
            </div>
          </div>
          <div class="row">
            <div class="col-lg-12">{cardData}</div>
          </div>
        </div>
      </div>

      <div class="copyright bg-gray">
        <div class="container">
          <div class="row">
            <div class="col-lg-12">
              <p class="p-small">
                Developed By <a href="#">Nipun Theekshana</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
