import cart from "./assets/sh-cart.svg";

const CartWidget = (props) => {
  return (
    <button className="flex outline outline-cyan-500 rounded-full p-1">
      <img className="w-7" src={cart} />
      {props.cantidad}
    </button>
  );
};

export default CartWidget;
