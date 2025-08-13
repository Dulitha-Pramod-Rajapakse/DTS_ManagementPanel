import React, { use } from "react";
import "./LogIn.css";
import { useRef } from "react";
import hideEye from "../assets/eye-no-svgrepo-com.svg";
import showEye from "../assets/eye-svgrepo-com.svg";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../action/loginAction";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function LogIn() {
  const [toggle, setToggle] = useState(false);
  const usernameRef = useRef(null);
  const passwordRef = useRef(null);

  const navigate = useNavigate();

  const dispatch = useDispatch();

  //for testing
  // const loginState = useSelector(state => state.login);
  // console.log("Login state:", loginState);
  // const state = useSelector(state => state); // grab entire Redux state
  // console.log("Redux state:", state);

  const { loading, userInfo, error } = useSelector((state) => state.login);

  useEffect(() => {
    //for loading state
    if (loading) {
      toast.info("Loading...", {
        position: "top-right",
        autoClose: 500,
        style: {
          backgroundColor: "#77b9efff",
          color: "#fff",
          marginTop: "10px",
          width: "300px",
          minHeight: "40px",
        },
        progressStyle: { backgroundColor: "#fff" },
      });
    }
    //for error chacking
    if (error) {
      toast.error(error, {
        position: "top-right",
        autoClose: 3000,
        style: {
          backgroundColor: "#f44336",
          color: "#fff",
          marginTop: "10px",
          width: "300px",
          minHeight: "40px",
        },
        progressStyle: { backgroundColor: "#fff" },
      });
    }
    // // for testing
    // console.log("Loading:", loading);
    // console.log("Error:", error);
  }, [loading, error]);

  const togglePasswordVisibility = () => {
    setToggle((prev) => !prev);
  };

  const isFieldEmpty = (ref) => {
    if (!ref.current.value) {
      ref.current.focus();

      toast.error("This fields cannot be empty", {
        position: "top-right",
        autoClose: 3000,
        style: {
          backgroundColor: "#f44336",
          color: "#fff",
          marginTop: "10px",
          width: "300px",
          minHeight: "40px",
        },
        progressStyle: { backgroundColor: "#fff" },
      });

      return true;
    }

    return false;
  };

  const handleKeyDown = (e, nextRef, previousRef) => {
    if (e.key === "Enter" || e.key === "ArrowDown") {
      e.preventDefault();
      if (nextRef && nextRef.current) nextRef.current.focus();
    }
    if (e.key === "ArrowUp") {
      e.preventDefault();
      if (previousRef && previousRef.current) previousRef.current.focus();
    }
  };

  const haddleSubmit = () => {
    const username = usernameRef.current.value;
    const password = passwordRef.current.value;

    if (isFieldEmpty(usernameRef)) return;
    if (isFieldEmpty(passwordRef)) return;

    dispatch(login(username, password, navigate));
  };

  return (
    <div className="container">
      {/* <img src={hideEye} alt="Hide eye icon" />
      <img src={showEye} alt="Show eye icon" /> */}
      <div className="upperPart">
        <div className="headerTitle">
          <p className="p_dts">DTS</p>
          <p className="p_info">INFO</p>
        </div>
        <div className="headerText">
          <p>Sign in to your</p>
          <p>Account</p>
        </div>
        <div className="subText">Enter your userID and password to log in</div>
      </div>

      <div className="middlePart">
        <div className="card">
          <input
            ref={usernameRef}
            type="text"
            id="username"
            placeholder="User ID"
            className="inputUserName"
            onKeyDown={(e) => handleKeyDown(e, passwordRef, null)}
          />
          <div className="passwordWrapper">
            <input
              ref={passwordRef}
              type={toggle ? "text" : "password"}
              id="password"
              placeholder="******"
              className="inputPassword"
              onKeyDown={(e) => handleKeyDown(e, null, usernameRef)}
            />
            <button
              className="eyeButton"
              aria-label="Toggle password visibility "
              onClick={togglePasswordVisibility}
            >
              <img
                className="btn_img"
                src={toggle ? showEye : hideEye}
                alt="eye"
              />
            </button>
          </div>
          <button className="loginButton" onClick={haddleSubmit}>
            Log In
          </button>
        </div>
      </div>

      <div className="lowerPart">
        <div className="copyright">
          Copyrights © Dockyard Total Solution (Pvt) Ltd.
          <br />
          All Rights Reserved.
        </div>
        <div className="poweredBy">
          Powered By Dockyard Total Solution (Pvt) LTD.
        </div>
      </div>
    </div>
  );
}
