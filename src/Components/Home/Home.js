import React from "react";
import "./Home.css";

function Home() {
  return (
    <>
      <div class="d-flex container-fluid">
        <div class="col-7">
          <img
            class="img-fluid img-hor"
            src="https://i.ibb.co/3BmR19c/landingpage1920x1280.jpg"
            alt="Courier Guy"
            border="0"
            id="courierGuy"
          ></img>
        </div>
        <div class="text-center" id="divLanding">
          <h1 class="fluid" id="h1Landing">
            Lorem Ipsum
          </h1>
          <div class="px-3" id="divQuote">
            "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet,
            consectetur, adipisci velit..."
          </div>
          <div id="divBtn">
            <a class="btn btn-lg btn-primary" href="#" role="button">
              Click Here
            </a>
          </div>
        </div>
      </div>
      <div class="container-fluid text-center" id="divTesti">
        <div id="divTestiBody">
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum
          id ultricies risus. Etiam posuere tincidunt ante, a pulvinar nulla
          pellentesque quis.
        </div>
        <div id="divTestiAuthor">Juan Luna, member since 2004</div>
        <div id="divTestBtn">
          <a class="btn btn-primary" href="#" role="button">
            &lt;
          </a>
          &nbsp;&nbsp;
          <a class="btn btn-primary" href="#" role="button">
            &gt;
          </a>
        </div>
      </div>
    </>
  );
}

export default Home;
