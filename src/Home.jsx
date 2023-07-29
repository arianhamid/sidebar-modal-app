import React, { useContext, useState } from "react";
import { FaBars } from "react-icons/fa";

const Home = () => {
  const [showModal, setShowModal] = useState(false);
  return (
    <main>
      <button className="sidebar-toggle">
        <FaBars />
      </button>
      <button
        className="btn"
        onClick={() => {
          setShowModal(!showModal), console.log(showModal);
        }}
      >
        Show Modal
      </button>
    </main>
  );
};

export default Home;
