import MainAudit from "~/app/(pages)/Audit/mainAudit";
import ContactBanner from "~/components/ContactBanner";
import Faqs from "~/components/Faqs";
import SerciceSection from "~/components/ServiceSection";

const Audit = () => {
  return (
    <div>
      <MainAudit />

      <SerciceSection />

      <Faqs />

      <ContactBanner />
    </div>
  );
};

export default Audit;
