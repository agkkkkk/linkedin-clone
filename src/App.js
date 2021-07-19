import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./App.css";

import Header from "./components/Header/Header";
import SideBar from "./components/SideBar/SideBar";
import Feed from "./components/Feed/Feed";
import Login from "./components/Login/Login";
import Widget from "./components/Widget/Widget";

import { login, logout, selectUser } from "./features/userSlice";
import { auth } from "./firebase";

function App() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  useEffect(() => {
    auth.onAuthStateChanged((userAuth) => {
      if (userAuth) {
        dispatch(
          login({
            email: userAuth.email,
            uid: userAuth.uid,
            displayName: userAuth.displayName,
          })
        );
      } else {
        dispatch(logout());
      }
    });
  }, []);

  return (
    <div className="App">
      <Header />

      {!user ? (
        <Login />
      ) : (
        <div className="appBody">
          <SideBar />
          <Feed />
          <Widget />
        </div>
      )}
    </div>
  );
}

export default App;
