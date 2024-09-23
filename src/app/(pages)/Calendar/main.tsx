import React from 'react';

const HubSpotCalendar: React.FC = () => {
  return (
    <div className="mt-4 mb-44 overflow-hidden">
      <iframe
        src="https://meetings-eu1.hubspot.com/djeberine?embed=true"
        className="w-full h-[700px] overflow-auto"
            title="Prendre rendez-vous dans notre calendrier"
        style={{ border: 'none' }}
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default HubSpotCalendar;
