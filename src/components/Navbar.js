import "./Navbar.css";
const Navbar = () => {
  return (
    <>
      <div id="navbar__container">
        <div id="leftSide">
          <img id="navbarLogo" src="/assets/images/sublogo_itourists.png"></img>
          <p>iTourist</p>
        </div>
        <div id="middle">
          <li>Home</li>
          <li>Profile</li>
          <li>Search</li>
          <li>Contact Us</li>
        </div>
        <div id="rightSide">
          <p id="signIn"> Sign In</p>
          <div id="signUp">Sign Up
          </div>
          <div id="burger__container">
          <div className="burger__div"></div>
          <div className="burger__div"></div>
          <div className="burger__div"></div>
        </div>

        </div>
      </div>
      
    </>
  );
};
export default Navbar;