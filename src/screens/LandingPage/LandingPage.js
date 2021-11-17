import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import Hassle from "../../components/hasslesection/Hassle";
function LandingPage(props) {
  return (
    <div>
      <Navbar />
      <Hassle data={props.data1} />
    </div>
  );
}

export default LandingPage;
