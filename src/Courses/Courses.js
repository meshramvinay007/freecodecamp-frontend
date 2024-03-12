import React from "react";
import { courses } from "./constant";
import { StyledCoursesComponent } from "./Courses.styles";
// import { StyledCoursesComponent } from "./Courses.styles";

const Courses = () => {
  return (
    <StyledCoursesComponent>
      <h3 className="courses-heading">
        Earn free verfied certifications with freeCodeCamp's core curriculum:
      </h3>
      {courses.map((course) => (
        <div className="course" key={course.label}>
          <div className="course-logo">{course.logo}</div>
          <p className="course-label">{course.label}</p>
        </div>
      ))}
    </StyledCoursesComponent>
  );
};

export default Courses;
