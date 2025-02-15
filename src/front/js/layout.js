import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";

import Home from "./pages/home";
import { Single } from "./pages/single";
import injectContext from "./store/appContext";

import { Navbar } from "./component/navbar";
import { Footer } from "./component/footer";
import { Support } from "./component/support";
import Login from "./component/Login";
import SignUp from "./component/SignUp";
import { News } from "./component/News";
import CheckoutForm from "./component/CheckoutForm";
import Profile from "./component/Profile"; // Change this import to match the component name

// create your first component
const Layout = () => {
  // the basename is used when your project is published in a subdirectory and not in the root of the domain
  // you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
  const basename = process.env.BASENAME || "";

  return (
    <div>
      <BrowserRouter basename={basename}>
        <ScrollToTop>
          <Navbar />
          <Routes>
            <Route element={<Home />} path="/" />

            <Route element={<Support />} path="/support" />
            <Route element={<Single />} path="/single/:theid" />
            <Route element={<Login />} path="/login" />
            <Route element={<SignUp />} path="/signUp" />
            <Route element={<News />} path="/news" />
            <Route element={<Profile />} path="/profile" /> {/* Update this line */}
            <Route element={<CheckoutForm />} path="/checkout" />
            <Route element={<h1>Not found!</h1>} />
          </Routes>
          <Footer />
        </ScrollToTop>
      </BrowserRouter>
    </div>
  );
};

export default injectContext(Layout);
