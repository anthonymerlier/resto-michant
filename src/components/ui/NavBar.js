import Logo from "../../images/logo/Logo.svg";
import Burger from "./Burger";

const Nav = ({ onClick }) => {
  return (
    <div className="nav">
      <img src={Logo} alt="logo quai antique" style={{ maxHeight: "50px" }} />
      <Burger onClick={onClick} />
    </div>
  );
};

export default Nav;
