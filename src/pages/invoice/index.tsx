import { useLocation } from "react-router-dom";
import MainLayout from "../../components/partials/layout/MainLayout";
import { Invoice } from "../../types/interfaces/invoice";
import { useEffect } from "react";
import InvoiceLayout from "../../components/fragments/invoice/InvoiceLayout";

const InvoicePage = () => {
  const location = useLocation();
  const invoice: Invoice | undefined = location.state?.invoice;

  useEffect(() => {
    if (invoice == undefined) {
      window.location.href = "/";
    }
  }, []);

  return (
    <MainLayout>
      <div className="container py-16 md:py-0">
        <div className="w-full p-6 min-h-screen flex justify-center items-center">
          <InvoiceLayout invoice={invoice}/>
        </div>
      </div>
    </MainLayout>
  );
};

export default InvoicePage;
