import { MouseEvent } from "react";

type ButtonAddCartProps = {
  productCart: number;
  incrementCart: (event: MouseEvent<HTMLButtonElement>) => void;
  decrementCart: (event: MouseEvent<HTMLButtonElement>) => void;
};

const ButtonAddCart = ({
  productCart,
  incrementCart,
  decrementCart,
}: ButtonAddCartProps) => {
  return (
    <div className="flex">
      <button
        className="py-1 px-2 border rounded-l-md"
        onClick={decrementCart}
      >
        -
      </button>
      <button className="py-1 px-4 border-y">{productCart}</button>
      <button
        className="py-1 px-2 border rounded-r-md"
        onClick={incrementCart}
      >
        +
      </button>
    </div>
  );
};

export default ButtonAddCart;
