import React, { useContext, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/images/logo/logo.png";
import { AuthContext } from "../contexts/AuthProvider";

const NavItems = () => {
  const [menuToggle, setMenuToggle] = useState(false);
  const [socialToggle, setSocialToggle] = useState(false);
  const [headerFixed, setHeaderFixed] = useState(false);
  const [cartItemsCount, setCartItemsCount] = useState(0);

  // * authinfo
  const { user } = useContext(AuthContext);
  console.log(user);

  // * Update cart items count from local storage
  useEffect(() => {
    const updateCartItemsCount = () => {
      const storedCartItems = JSON.parse(localStorage.getItem("cart")) || [];
      setCartItemsCount(storedCartItems.reduce((total, item) => total + item.quantity, 0));
    };

    // Update count on mount
    updateCartItemsCount();

    // Add an event listener to update cart count when local storage changes
    window.addEventListener("storage", updateCartItemsCount);

    // Cleanup event listener on unmount
    return () => {
      window.removeEventListener("storage", updateCartItemsCount);
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 200) {
        setHeaderFixed(true);
      } else {
        setHeaderFixed(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Cleanup event listener on unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`header-section style-4 ${headerFixed ? "header-fixed fadeInUp" : ""}`}
    >
      {/* header top start */}
      <div className={`header-top d-md-none ${socialToggle ? "open" : ""}`}>
        <div className="container">
          <div className="header-top-area">
            <Link to="/sign-up" className="lab-btn me-3 d-md-none">
              <span>Create Account</span>
            </Link>
            <Link to="/login" className="d-md-none">Log In</Link>
          </div>
        </div>
      </div>

      {/* header bottom start */}
      <div className="header-bottom">
        <div className="container">
          <div className="header-wrapper">
            {/* logo */}
            <div className="logo-search-acte">
              <div className="logo">
                <Link to="/">
                  <img src={logo} alt="Logo" />
                </Link>
              </div>
            </div>

            {/* menu area */}
            <div className="menu-area">
              <div className="menu">
                <ul className={`lab-ul ${menuToggle ? "active" : ""}`}>
                  <li>
                    <Link to="/">Home</Link>
                  </li>
                  <li>
                    <Link to="/shop">Shop</Link>
                  </li>
                  <li>
                    <Link to="/blog">Blog</Link>
                  </li>
                  <li>
                    <Link to="/about">About</Link>
                  </li>
                  <li>
                    <Link to="/contact">Contact</Link>
                  </li>
                </ul>
              </div>

              {/* sign in & log in */}
              <Link to="/sign-up" className="lab-btn me-3 d-none d-md-block">
                Create Account
              </Link>
              <Link to="/login" className="d-none d-md-block">
                log In
              </Link>

              {/* cart icon */}
              <div className="cart-icon-wrapper">
                <Link to="/cart-page">
                  <i className="icofont-cart-alt ms-3"></i>
                  {cartItemsCount > 0 && (
                    <span className="cart-count A4rafs">{cartItemsCount}</span>
                  )}
                </Link>
              </div>

              {/* menu toggler */}
              <div
                onClick={() => setMenuToggle(!menuToggle)}
                className={`header-bar d-lg-none ${menuToggle ? "active" : ""}`}
              >
                <span></span>
                <span></span>
                <span></span>
              </div>

              {/* social toggler */}
              <div
                className="ellepsis-bar d-md-none"
                onClick={() => setSocialToggle(!socialToggle)}
              >
                <i className="icofont-info-square"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default NavItems;
