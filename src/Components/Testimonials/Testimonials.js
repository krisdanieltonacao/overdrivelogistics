import React from "react";
import "./Testimonials.css";

function Testimonials() {
  return (
    <div id="divTesti">
      <div id="divQoute">
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum id
        ultricies risus. Etiam posuere tincidunt ante, a pulvinar nulla
        pellentesque quis. Quisque sed nibh congue ex congue dictum. Sed
        consequat gravida eros, laoreet pharetra est egestas eget. Praesent vel
        lorem sit amet lacus fringilla lacinia at et libero. Vivamus nibh
        ligula, tempus facilisis purus euismod"
      </div>
      <div id="divQoute">- Juan Luna</div>
      <div id="divBtn">
        <button id="btnTesti">Previous</button>&nbsp;
        <button id="btnTesti">Next</button>
      </div>
    </div>
  );
}

export default Testimonials;
