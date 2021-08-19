import React from "react";
import welcome from "../../img/welcome.jpg";

const Home = () => {
  return (
    <div>
      <img
        src={welcome}
        alt="welcome"
        style={{
          width: "100%",
          height: "auto",
          display: "block",
          margin: "0px auto",
        }}
      />
    </div>
  );
};

export default Home;
