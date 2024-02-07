import MainLayout from "../../components/partials/layout/MainLayout";
import RightSection from "../../components/fragments/contact/RightSection";
import LeftSection from "../../components/fragments/contact/LeftSection";

const ContactPage = () => {
  return (
    <MainLayout>
      <div className="py-16 md:py-20 min-h-screen">
        <div className="container flex flex-wrap pt-6">
          <RightSection />
          <LeftSection />
        </div>
      </div>
    </MainLayout>
  );
};

export default ContactPage;
