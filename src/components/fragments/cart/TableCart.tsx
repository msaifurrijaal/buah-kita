import { CartItem } from "../../../context/CartContext";
import { Fruit } from "../../../types/interfaces/fruit";
import { rupiahFormatter } from "../../../utils/rupiah-formatter";
import Button from "../../elements/button";
import CartTable from "../../elements/cart/CartTable";

type TableCartLayoutProps = {
  products: Fruit[];
  cart: CartItem[];
  totalPrice: number;
};

const TableCartLayout = ({
  products,
  totalPrice,
  cart,
}: TableCartLayoutProps) => {
  return (
    <div>
      {products && products.length > 0 ? (
        <div className="table-container overflow-x-auto md:px-4">
          <CartTable cart={cart} products={products} />
          {totalPrice && totalPrice != 0 && (
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

export default TableCartLayout;
