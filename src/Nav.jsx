import React, { useEffect, useState } from "react";
import "./Nav.css";
import netflix from "./netflix.png";
import userAvatar from "./netflix-avatar.png";
function Nav() {
  const [show, handleShow] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        handleShow(true);
      } else {
        handleShow(false);
      }
    });
    return () => {
      window.removeEventListener("scroll");
    };
  }, []);

  return (
    <div className={`nav ${show && "nav__black"}`}>
      <img className="nav__logo" src={netflix} alt="Netflix Logo" />
      <img className="nav__avatar" src={userAvatar} alt="Netflix Logo" />
    </div>
  );
}

export default Nav;
