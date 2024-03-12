import styled from "styled-components";

export const StyledSignUpComponent = styled.div`
  border: 2.5px solid;
  margin: 50px auto;
  padding: 30px 0;

  width: 350px;
  -webkit-box-shadow: 0px 0px 33px -4px rgba(0, 0, 0, 0.4);
  -moz-box-shadow: 0px 0px 33px -4px rgba(0, 0, 0, 0.4);
  box-shadow: 0px 0px 33px -4px rgba(0, 0, 0, 0.4);

  .logo {
    height: 30px;
    width: 30px;
    margin: 0 auto 20px;

    img {
      width: 100%;
    }
  }
  .signup-text {
    text-align: center;

    width: 80%;
    margin: auto;
    font-size: 25px;
  }

  form {
    width: 100%;
    .form-element {
      width: 80%;
      margin: 10px auto;

      label {
        font-weight: 500;
        display: block;
        margin-bottom: 5px;
      }

      input {
        padding: 10px;
        box-sizing: border-box;
        font-size: 16px;
        width: 100%;
        height: 40px;
        border: 1.5px solid;
      }

      .error-text {
        color: red;
        font-weight: 500;
      }
    }

    .toggle-page {
      text-align: center;

      .link {
        color: blue;
        text-decoration: underline;
      }
    }

    .api-error-text {
      color: red;
      font-weight: 500;
      width:80%;
      margin:auto
    }

    .submit-button {
      text-align: center;

      button {
        margin: 20px 0 10px;
        font-size: 16px;
        font-weight: 400;
        width: 80%;
        height: 40px;
        background-color: orange;
        border: none;
      }
    }
  }
`;
