import classes from './Navbar.modules.css'

const Navbar = () => {
  return (
    <header className={classes.header}>
  <h4>NavBar</h4>
  <ul>
<li><a href="">televisores</a></li>
<li><a href="">celulares</a></li>
<li><a href="">pc</a></li>
<li><a href="">audio</a></li>

  </ul>
    </header>
  )
}

export default Navbar
