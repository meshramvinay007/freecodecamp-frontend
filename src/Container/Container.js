import React from "react";
import { StyledContainerComponent } from "./Container.styles";
import { logos } from "./constants";
import {  useNavigate } from "react-router-dom";

const Container = (props) => {
  const { isLoggedIn = false } = props;
  const navigate = useNavigate();
  return (
    <StyledContainerComponent>
      <h1 className="heading">Build projects.</h1>
      <h1 className="heading">Earn certifications.</h1>
      <h1 className="heading">Learn to code — for free.</h1>
      <h4 className="info-text">
        Since 2014, more than 40,000 freeCodeCamp.org graduates have gotten jobs
        at tech companies including:
      </h4>
      <div className="logos">
        {logos.map((logo) => (
          <div key={logo.key} className={`company-logo ${logo.key}`}>
            {logo.logo}
            {logo.name}
          </div>
        ))}
      </div>
      {isLoggedIn && (
        <div className="courses-button">
          <button onClick={() => navigate("/courses")}>Go to Courses</button>
        </div>
      )}
    </StyledContainerComponent>
  );
};

export default Container;
