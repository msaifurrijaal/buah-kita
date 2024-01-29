import { faCreditCard } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const BukakitaPay = () => {
  return (
    <div className="flex items-center">
      <FontAwesomeIcon icon={faCreditCard} style={{ color: "#74C0FC" }} />
      <p className="ms-2">BuahkitaPay</p>
    </div>
  );
};

export default BukakitaPay;
