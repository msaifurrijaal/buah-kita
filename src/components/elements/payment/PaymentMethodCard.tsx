import { faCircleCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { PaymentMethod } from "../../../types/interfaces/paymentMethod";

const PaymentMethodCard = ({
  paymentMethods,
}: {
  paymentMethods: PaymentMethod[];
}) => {
  return (
    <>
      {" "}
      {paymentMethods.map((item) => {
        return (
          <div
            key={item.title}
            className="w-full rounded-lg border p-2 mt-2 flex items-center"
          >
            <div className="w-1/6">
              <img src={item.image} alt="Bank BCA" />
            </div>
            <div className="w-5/6 flex justify-between items-center ps-2">
              <p>{item.title}</p>
              {item.isShow && <FontAwesomeIcon icon={faCircleCheck} />}
            </div>
          </div>
        );
      })}
    </>
  );
};

export default PaymentMethodCard;
