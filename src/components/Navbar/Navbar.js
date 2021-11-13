import React, { useState, useEffect } from "react";
import "./style.css";
import axios from "axios";
import { Row, Col } from "antd";
function Navbar() {
  const [data, setdata] = useState([]);

  useEffect(() => {
    var config = {
      method: "get",
      url: "https://api.publicapis.org/entries",
    };

    axios(config)
      .then(function (res) {
        console.log(res);
        setdata(res.data.entries);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);
  return (
    <div>
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
