import { faEllipsis, faWallet } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { formatDateTime } from "../../../utils/date-formatter";
import { rupiahFormatter } from "../../../utils/rupiah-formatter";
import { History } from "../../../types/interfaces/history";

const CardHistory = ({ history }: { history: History }) => {
  return (
    <div
      className="w-full rounded-lg shadow-lg p-4 border mb-2"
      key={history.payment_info}
    >
      <div className="flex flex-wrap items-center">
        <FontAwesomeIcon icon={faWallet} />

        <h1 className="text-sm ms-2 font-semibold">{history.payment_type}</h1>
        <p className="text-sm ms-2">{formatDateTime(history.created_at)}</p>
        <p className="mx-2">-</p>
        <p className="text-sm">{history.payment_info}</p>
      </div>
      <h1 className="text-lg text-gray-500 mt-2">Total Transaksi</h1>
      <h1 className="text-xl font-semibold mt-1">
        {rupiahFormatter(history.gross_amount)}
      </h1>
      <div className="flex justify-between items-cente mt-2">
        {history.status == "pending" && (
          <div className="py-1 px-3 rounded-lg border text-yellow-500 border-yellow-500">
            Pending
          </div>
        )}
        {history.status == "expired" && (
          <div className="py-1 px-3 rounded-lg border text-red-500 border-red-500">
            Expired
          </div>
        )}
        {history.status == "paid" && (
          <div className="py-1 px-3 rounded-lg border text-green-500 border-green-500">
            Paid
          </div>
        )}
        <div className="flex items-center">
          <p className="text-base font-semibold text-primary">
            Lihat Detail Transaksi
          </p>
          <div className="py-1 px-2 ms-2 rounded-lg border">
            <FontAwesomeIcon icon={faEllipsis} color="#4E9F3D" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardHistory;
