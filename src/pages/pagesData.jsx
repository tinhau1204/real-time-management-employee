// import About from "./About";
import Home from "./Home";
import React from "react";
import SignIn from "./SignIn/signIn";

const pagesData = [
  {
    path: "",
    element: <Home />,
    title: "home"
  },
  {
    path: "/sign-in",
    element: <SignIn />,
    title: "sign in"
}
//   {
//     path: "about",
//     element: <About />,
//     title: "about"
//   }
];

export default pagesData;