type ListDetailProps = {
  title: string;
  children: React.ReactNode;
};

const ListDetail = ({ title, children }: ListDetailProps) => {
  return (
    <div className="flex mt-1">
      <div className="w-1/4">
        <p className="text-base font-semibold">{title}</p>
      </div>
      <div className="w-3/4 flex items-center">
      <p className="text-base font-semibold me-2">:</p>
        {children}
        </div>
    </div>
  );
};

export default ListDetail;
