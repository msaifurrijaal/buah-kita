import { CartItem, useCartDispatch } from "../../../context/CartContext";
import { Fruit } from "../../../types/interfaces/fruit";
import { rupiahFormatter } from "../../../utils/rupiah-formatter";

type CartTableProps = {
  products: Fruit[];
  cart: CartItem[];
};

const CartTable = ({ cart, products }: CartTableProps) => {
  const dispatch = useCartDispatch();

  const addToCart = (productId: number, qty: number) => {
    if (dispatch != null) {
      dispatch({ type: "ADD_TO_CART", payload: { id: productId, qty } });
    }
  };

  const removeFromCart = (productId: number) => {
    if (dispatch != null) {
      dispatch({ type: "REMOVE_FROM_CART", payload: { id: productId } });
    }
  };
  return (
    <table className="table-auto w-full mt-4 md:mt-8">
      <thead>
        <tr>
          <th className="text-start border-b border-slate-300 py-2">Item</th>
          <th className="border-b border-slate-300 px-4 py-2">Price</th>
          <th className="border-b border-slate-300 px-4 py-2">Quantity</th>
          <th className="text-end border-b border-slate-300 py-2">Total</th>
        </tr>
      </thead>
      <tbody>
        {products &&
          products.length > 0 &&
          cart != null &&
          cart.map((item) => {
            const product: Fruit | undefined = products.find(
              (product) => product.id === item.id
            );
            return (
              <tr key={product?.id}>
                <td className="p-4 text-start ">
                  <div className="flex flex-wrap sm:flex-nowrap">
                    <div className="min-w-14">
                      <img
                        src={product?.img}
                        className="max-w-12 aspect-square object-cover object-center rounded-lg"
                      />
                    </div>
                    <div className="flex-grow flex-wrap sm:ps-2">
                      <p className="text-base font-semibold">{product?.name}</p>
                      <p className="text-sm mt-1">
                        Category : {product?.category.name}
                      </p>
                    </div>
                  </div>
                </td>
                <td className="p-4 text-center">
                  {rupiahFormatter(product!.price)}
                </td>
                <td className="p-4 text-center">
                  <div className="flex justify-center">
                    <button
                      className="py-1 px-2 border rounded-l-md"
                      onClick={() => removeFromCart(product!.id)}
                    >
                      -
                    </button>
                    <button className="py-1 px-4 border-y">{item.qty}</button>
                    <button
                      className="py-1 px-2 border rounded-r-md"
                      onClick={() => addToCart(product!.id, 1)}
                    >
                      +
                    </button>
                  </div>
                </td>
                <td className="p-4 text-end">
                  {rupiahFormatter(item.qty * product!.price)}
                </td>
              </tr>
            );
          })}
      </tbody>
    </table>
  );
};

export default CartTable;
