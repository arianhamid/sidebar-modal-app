import React, { useContext, useState } from "react";
import { FaBars } from "react-icons/fa";
import { AppContext, useGlobalContext } from "./context";

const Home = () => {
  const data = useGlobalContext();
  console.log(data);
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
