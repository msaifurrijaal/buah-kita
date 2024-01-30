import { CartItem, useCartDispatch } from "../../../context/CartContext";
import { Fruit } from "../../../types/interfaces/fruit";
import { rupiahFormatter } from "../../../utils/rupiah-formatter";
import Button from "../../elements/button";

type TableCartProps = {
  products: Fruit[];
  cart: CartItem[] | null;
  totalPrice: number;
};

const TableCart = ({ products, cart, totalPrice }: TableCartProps) => {
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
    <div>
      {products && products.length > 0 ? (
        <div className="table-container overflow-x-auto md:px-4">
          <table className="table-auto w-full mt-4 md:mt-8">
            <thead>
              <tr>
                <th className="text-start border-b border-slate-300 py-2">
                  Item
                </th>
                <th className="border-b border-slate-300 px-4 py-2">Price</th>
                <th className="border-b border-slate-300 px-4 py-2">
                  Quantity
                </th>
                <th className="text-end border-b border-slate-300 py-2">
                  Total
                </th>
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
                              width="50px"
                              height="50px"
                              alt=""
                            />
                          </div>
                          <div className="flex-grow flex-wrap sm:ps-2">
                            <p className="text-base font-semibold">
                              {product?.name}
                            </p>
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
                          <button className="py-1 px-4 border-y">
                            {item.qty}
                          </button>
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

          {totalPrice && (
            <div className="flex justify-end mt-8">
              <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4">
                <div className="flex justify-between py-4 border-b">
                  <h1 className="text-base font-bold">Subtotal</h1>
                  <h1 className="text-base">{rupiahFormatter(totalPrice)}</h1>
                </div>
                <div className="flex justify-between py-4 border-b">
                  <h1 className="text-base font-bold">Service Fee</h1>
                  <h1 className="text-base">Rp 1.500</h1>
                </div>
                <div className="flex justify-between items-center py-4 border-b">
                  <h1 className="text-base font-bold">Grand Total</h1>
                  <h1 className="text-2xl">
                    {rupiahFormatter(totalPrice + 1500)}
                  </h1>
                </div>
                <div className="flex justify-end">
                  <Button
                    classname="text-white bg-accent mt-6"
                    onClick={() =>
                      alert(
                        "Maaf fitur checkout barang secara massal masih belum tersedia, silahkan gunakan fitur beli sekarang pada halaman detail produk"
                      )
                    }
                  >
                    CHECK OUT
                  </Button>
                </div>
              </div>
            </div>
          )}
        </div>
      ) : (
        <div className="py-40 text-center">
          <h1 className="text-4xl font-bold">Loading....</h1>
        </div>
      )}
    </div>
  );
};

export default TableCart;
