import { Invoice } from "../../../types/interfaces/invoice";
import { formatDateTime } from "../../../utils/date-formatter";
import { rupiahFormatter } from "../../../utils/rupiah-formatter";
import ListInvoice from "../../elements/invoice/ListInvoice";

const InvoiceLayout = ({ invoice }: { invoice: Invoice | undefined }) => {
  return (
    <>
      {invoice && (
        <div className="w-full sm:w-3/4 md:w-2/3 lg:w-2/5 p-6 rounded-lg shadow-lg border">
          <div className="flex justify-center items-center">
            <img
              src="/images/logo.png"
              alt="Logo Buahkita"
              className="max-w-24"
            />
            <p className="ms-2 me-4 ">-</p>
            <h1 className="text-xl md:text-2xl font-bold">Invoice</h1>
          </div>

          <div className="mt-2">
            <p className="text-center text-sm text-gray-500 mb-4">
              {formatDateTime(invoice.transaction_time)}
            </p>
            <ListInvoice title="ID Transaksi" value={invoice.transaction_id} />
            <ListInvoice title="Jenis Transaksi" value={invoice.payment_type} />
            <ListInvoice title="Catatan" value="-" />
            <hr className="my-3" />
            <ListInvoice
              title="Nominal"
              value={rupiahFormatter(invoice.gross_amount)}
            />
            <ListInvoice title="Biaya Admin" value="Rp 0" />
            <hr className="my-3" />
            <div className="flex justify-between mt-2">
              <h1 className="text-lg font-semibold">Total Transaksi</h1>
              <h1 className="text-lg font-semibold">
                {rupiahFormatter(invoice.gross_amount)}
              </h1>
            </div>
          </div>

          <p className="mt-6 text-xs font-semibold text-green-700">
            INFORMASI :
          </p>
          <p className="text-xs text-gray-500">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestias
            architecto provident, excepturi modi reiciendis dolorem ullam sunt
            est maxime id!
          </p>
        </div>
      )}
    </>
  );
};

export default InvoiceLayout;
