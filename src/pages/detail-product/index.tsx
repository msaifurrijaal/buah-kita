import { useParams } from "react-router-dom";

const DetailProductPage = () => {
  const { id } = useParams();
  return <div>{id && <h1>{id}</h1>}</div>;
};

export default DetailProductPage;
