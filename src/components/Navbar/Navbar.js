import React, { useState, useEffect } from "react";
import "./style.css";
import axios from "axios";
import { Row, Col } from "antd";
import { Redirect } from "react-router-dom";
function Navbar() {
  const [data, setdata] = useState([]);
  const [refresh, setrefresh] = useState(false);
  const [counter, setcounter] = useState(0);

  // functions

  const buttonClick = () => {
    console.log("i am clicked");
    setdata([]);
    setrefresh(!refresh);
    setcounter(counter + 1);
  };

  // useEffects
  useEffect(() => {
    let data = localStorage.getItem("CounterRefresh");
    console.log(data);
    if (data !== null) {
      data = parseInt(data);

      setcounter(data);
      //
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("CounterRefresh", counter);
  }, [counter]);

  // api calling
  useEffect(() => {
    var config = {
      method: "get",
      url: "https://api.publicapis.org/entries",
    };

    axios(config)
      .then(function (res) {
        setdata(res.data.entries);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, [refresh]);

  if (counter >= 3) {
    return <Redirect to={{ pathname: "/page2" }} />;
  }
  return (
    <div>
      <button onClick={buttonClick}> Refresh </button>
      <Row justify="space-around">
        {data.map((user) => (
          <Col
            className="tabscreee"
            lg={5}
            md={10}
            xs={20}
            style={{ backgroundColor: "red", height: "10rem" }}
          >
            {user.Description}
          </Col>
        ))}
      </Row>
    </div>
  );
}

export default Navbar;
