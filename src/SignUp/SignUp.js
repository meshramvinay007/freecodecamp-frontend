import axios from "axios";
import React, { useState } from "react";
import { StyledSignUpComponent } from "./SignUp.styles";
import { useNavigate } from "react-router-dom";

const SignUp = (props) => {
  const { handleSignIn = () => {} } = props;
  const [name, setName] = useState("");
  const [nameError, setNameError] = useState("");
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");
  const [password, setPassword] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [isSignInPage, setIsSignInPage] = useState(true);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState("");
  const navigate = useNavigate();

  const validateName = (name) => {
    const nameRegex = /^[a-zA-Z\s]+$/;
    return nameRegex.test(name);
  };

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validatePassword = (password) => {
    const minLength = 8;
    return password.length >= minLength;
  };

  const handleSubmit = async (e) => {
    setLoading(true);
    e.preventDefault();
    if (isSignInPage) {
      if (!validateName(name)) {
        setNameError("Enter a valid name");
        setTimeout(() => {
          setNameError("");
        }, 4000);
        return;
      }
    }

    if (!validateEmail(email)) {
      setEmailError("Enter a valid Email");
      setTimeout(() => {
        setEmailError("");
      }, 4000);
      return;
    }

    if (!validatePassword(password)) {
      setPasswordError("Password minimum length should be 8.");
      setTimeout(() => {
        setPasswordError("");
      }, 4000);
      return;
    }

    const clearStates = () => {
      setEmail("");
      setName("");
      setPassword("");
    };

    try {
      const endpoint = isSignInPage ? "sign-in" : "login";
      const payload = isSignInPage
        ? { name, email, password }
        : { email, password };
      const response = await axios.post(
        `https://freecodecamp-backend-wnbg.vercel.app/${endpoint}`,
        payload
      );
      setLoading(true);
      const data = response.data;
      console.log("Data from api", data);
      if (data.success) {
        setLoading(false);
        handleSignIn(data);
        navigate("/courses");

        clearStates();
      } else {
        setError(data.message);
        setTimeout(() => {
          setError("");
        }, 4000);
        clearStates();
      }
    } catch (error) {
      setLoading(false);
      clearStates();
      console.error(error);
      if (!error?.response?.data?.success) {
        isSignInPage
          ? setError("This email alreay exists")
          : setError("Invalid email or password");

        setTimeout(() => {
          setError("");
        }, 4000);
      }
    }
  };
  return (
    <StyledSignUpComponent>
      <div className="logo">
        <img alt="logo" src="https://cdn.freecodecamp.org/platform/universal/logo-512X512.png" />
      </div>
      <p className="signup-text">
        {`${isSignInPage ? "Sign-in" : "Login"}`} to freeCodeCamp Learn
      </p>
      <form onSubmit={handleSubmit}>
        {isSignInPage && (
          <div className="form-element">
            <label htmlFor="name">Name</label>
            <input
              value={name}
              placeholder="Name"
              id="name"
              onChange={(e) => {
                setName(e.target.value);
              }}
            />
            {nameError && <p className="error-text">{nameError}</p>}
          </div>
        )}
        <div className="form-element">
          <label htmlFor="email-id">Email Address</label>
          <input
            value={email}
            id="email-id"
            placeholder="Email Address"
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
          {emailError && <p className="error-text">{emailError}</p>}
        </div>
        <div className="form-element">
          <label htmlFor="password">Password</label>
          <input
            value={password}
            id="password"
            type="password"
            placeholder="Password"
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
          {passwordError && <p className="error-text">{passwordError}</p>}
        </div>
        <div className="toggle-page">
          {isSignInPage ? (
            <p>If your account already exist</p>
          ) : (
            <p>If your account does not exist</p>
          )}

          <p
            onClick={() => setIsSignInPage((prev) => !prev)}
            className="link"
          >{`${
            isSignInPage ? "Login into your account" : "Create new account"
          }`}</p>
        </div>
        <p className="api-error-text">{error}</p>
        <div className="submit-button">
          <button type="submit">{loading ? "Loading..." : "Submit"}</button>
        </div>
      </form>
    </StyledSignUpComponent>
  );
};

export default SignUp;
