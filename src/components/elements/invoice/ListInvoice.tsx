type ListInvoiceProps = {
  title: string;
  value: string;
};

const ListInvoice = ({ title, value }: ListInvoiceProps) => {
  return (
    <div className="flex justify-between mt-2">
      <p className="text-base text-gray-500">{title}</p>
      <p className="text-base font-semibold">{value}</p>
    </div>
  );
};

export default ListInvoice;
