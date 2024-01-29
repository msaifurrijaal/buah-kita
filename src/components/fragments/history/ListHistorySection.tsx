import Skeleton from "react-loading-skeleton";
import { History } from "../../../types/interfaces/history";
import CardHistory from "../../elements/history/CardHistory";
import "react-loading-skeleton/dist/skeleton.css";

type ListHistorySectionProps = {
  listHistory: History[] | undefined;
  isLoading: boolean;
};

const ListHistorySection = ({
  listHistory,
  isLoading,
}: ListHistorySectionProps) => {
  return (
    <div className="w-full lg:w-2/3">
      {listHistory &&
        listHistory.length > 1 &&
        listHistory.map((item: History) => <CardHistory history={item} />)}
      {isLoading &&
        [...Array(4)].map((_, index) => (
          <div className="w-full mb-1" key={index}>
            <Skeleton height="150px" />
          </div>
        ))}
    </div>
  );
};

export default ListHistorySection;
