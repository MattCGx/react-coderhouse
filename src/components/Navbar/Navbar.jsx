import classes from "./Navbar.modules.css";
import CartWidget from "../CartWidget/CartWidget";
import Button from "../Button/Button";

const Navbar = () => {
  return (
    <header className={classes.header}>
      <i></i>
      <ul>
        <li>
          <a href="">televisores</a>
        </li>
        <li>
          <a href="">celulares</a>
        </li>
        <li>
          <a href="">pc</a>
        </li>
        <li>
          <a href="">audio</a>
        </li>
      </ul>
      <CartWidget />
    </header>
  );
};

export default Navbar;
