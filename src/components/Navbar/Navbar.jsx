import CartWidget from "../CartWidget/CartWidget";
import Button from "../Button/Button";
import logo from "./assets/OIG2.png"

const Navbar = () => {
  return (
    <header className="h-10 flex flex-row bg-gray-700 justify-between ps-2 py-1 pe-5 align-middle">
      <img className="size-20 rounded-full shadow shadow-cyan-500/50" src={logo} alt="logo" />
      <div className="flex justify-start pt-2 ps-2 w-2/5">
        <Button
          className="rounded-full mx-2 pe-1 ps-1 w-fit outline outline-cyan-500 bg-slate-400"
          contenido="Impresoras"
        ></Button>

        <Button
          className="rounded-full mx-2 pe-1 ps-1 w-fit outline outline-cyan-500 bg-slate-400"
          contenido="Filamentos"
        ></Button>

        <Button
          className="rounded-full mx-2 pe-1 ps-1 w-fit outline outline-cyan-500 bg-slate-400"
          contenido="Modelos STL"
        ></Button>

        <Button
          className="rounded-full mx-2 pe-1 ps-1  w-fit outline outline-cyan-500 bg-slate-400"
          contenido="Servicio Técnico"
        ></Button>
      </div>
      <CartWidget cantidad="0"/>
    </header>
  );
};

export default Navbar;
