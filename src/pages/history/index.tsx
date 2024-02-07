import MainLayout from "../../components/partials/layout/MainLayout";
import LayananSection from "../../components/fragments/history/LayananSection";
import { useEffect, useState } from "react";
import { useCookies } from "react-cookie";
import { getHistory } from "../../services/data/getHistory";
import { History } from "../../types/interfaces/history";
import ListHistorySection from "../../components/fragments/history/ListHistorySection";

const HistoryPage = () => {
  const [history, setHistory] = useState<History[]>([]);
  const [cookies, ,] = useCookies(["token"]);
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    const fecthData = async () => {
      try {
        setLoading(true);
        const result = await getHistory(cookies.token);
        setLoading(false);
        if (result.success) {
          setHistory(result.data.data);
        } else {
          alert(`Error : ${result.data}`);
        }
      } catch (error) {
        alert(`Error : ${error}`);
      }
    };

    fecthData();
  }, []);

  return (
    <MainLayout>
      <div className="container py-16 md:py-20">
        <div className="py-6 px-4">
          <h1 className="text-xl md:text-2xl font-bold">Daftar Transaksi</h1>
          <div className="mt-6 flex flex-wrap">
            <LayananSection />
            <ListHistorySection isLoading={isLoading} listHistory={history} />
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default HistoryPage;
