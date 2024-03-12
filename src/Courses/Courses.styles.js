import styled from "styled-components";

export const StyledCoursesComponent = styled.div`
  margin: auto;
  margin-top: 50px;
  width: 40%;

  .courses-heading {
    font-size: 24px;

  }

  .course {
    display: flex;
    align-items: center;
    background-color: #3b3b4f;
    border: 2px solid #d0d0d5;
    margin-bottom: 10px;

    .course-logo {
      padding: 20px;
      font-size: 30px;
      color: #d0d0d5;
    }

    .course-label {
      color: #d0d0d5;
      font-size: 18px;
    }
  }
`;
