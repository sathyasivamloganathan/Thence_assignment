import React from 'react'
import '../Buttons/style.css'
import { Link } from 'react-router-dom';

const Buttons = () => {
  return (
    <div>
      <Link to={"/get-projects"}>
        <button className="buttonStyle">
          <span className="button-text">Get Projects</span>
        </button>
      </Link>
      <button className="buttonStyle1">
        <span className="button-text1">Onboard Talent</span>
      </button>
    </div>
  );
};


export default Buttons