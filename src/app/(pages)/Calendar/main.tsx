import React from "react";

const HubSpotCalendar: React.FC = () => {
  return (
    <div className="mb-44 mt-4 overflow-hidden">
      <iframe
        className="h-[700px] w-full overflow-auto"
        src="https://meetings-eu1.hubspot.com/djeberine?embed=true"
        style={{ border: "none" }}
        title="Prendre rendez-vous dans notre calendrier"
        allowFullScreen
      />
    </div>
  );
};

export default HubSpotCalendar;
