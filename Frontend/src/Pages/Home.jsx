// import React from 'react'
// import Hero from '../components/Hero';
// import WhyChoose from '../components/WhyChoose';
// import ProcessSection from '../components/ProcessSection';
// import Testimonials from '../components/Testimonials';
// import CallToAction from '../components/CallToAction';

// function Home() {
//   return (
//     <div>
//      <Hero />
//      <WhyChoose />
//      <ProcessSection />
//      <Testimonials />
//      <CallToAction />
//     </div>
//   )
// }

// export default Home;


import React from 'react'
import Hero from '../components/Hero';
import WhyChoose from '../components/WhyChoose';
import ProcessSection from '../components/ProcessSection';
import Testimonials from '../components/Testimonials';
import CallToAction from '../components/CallToAction';

function Home() {
  return (
    <div className="bg-base-100">
     <Hero />
     <WhyChoose />
     <ProcessSection />
     <Testimonials />
     <CallToAction />
    </div>
  )
}

export default Home;