import React from 'react';
import './App.css';
import CTA from './CTA/components/CTA';
import Hero from './Hero/components/Hero';
import SectionActionableInsights from './SectionActionableInsights/components/SectionActionableInsights';
import SectionAutomateSupport from './SectionAutomateSupport/components/SectionAutomateSupport';
import SectionInboundCommunication from './SectionInboundChannels/components/SectionInboundCommunication';
import Testimonials from './Testimonials/components/Testimonials';

function App() {
  return (
    <div className="App">
      <Hero />
      <SectionInboundCommunication />
      <SectionAutomateSupport />
      <SectionActionableInsights />
      <Testimonials />
      <CTA />

    </div>
  );
}

export default App;
