import React from 'react';
import SZYM_parking_001 from '../../assets/images/1080p/SZYM_wnetrze_001.png';

const featuresData = [
  {
    year: '2025', label: 'Rok budowy', icon: (
      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.3" d="M4 10h16m-8-3V4M7 7V4m10 3V4M5 20h14a1 1 0 0 0 1-1V7a1 1 0 0 0-1-1H5a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1Zm3-7h.01v.01H8V13Zm4 0h.01v.01H12V13Zm4 0h.01v.01H16V13Zm-8 4h.01v.01H8V17Zm4 0h.01v.01H12V17Zm4 0h.01v.01H16V17Z" />
    )
  },
  {
    year: '55-76m²', label: 'Powierzchnia', icon: (
      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.3" d="M11 6.5h2M11 18h2m-7-5v-2m12 2v-2M5 8h2a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1H5a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1Zm0 12h2a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1H5a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1Zm12 0h2a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1h-2a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1Zm0-12h2a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1h-2a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1Z" />
    )
  },
  {
    year: '99-112m²', label: 'Ogród i taras', icon: (
      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.3" d="M12 5V3m0 18v-2M7.05 7.05 5.636 5.636m12.728 12.728L16.95 16.95M5 12H3m18 0h-2M7.05 16.95l-1.414 1.414M18.364 5.636 16.95 7.05M16 12a4 4 0 1 1-8 0 4 4 0 0 1 8 0Z" />
    )
  },
  {
    year: '2-4', label: 'Sypialnie', icon: (
      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.3" d="M18 17v2M12 5.5V10m-6 7v2m15-2v-4c0-1.6569-1.3431-3-3-3H6c-1.65685 0-3 1.3431-3 3v4h18Zm-2-7V8c0-1.65685-1.3431-3-3-3H8C6.34315 5 5 6.34315 5 8v2h14Z" />
    )
  }
];

const FeatureItem = ({ year, label, icon }) => (
  <div className="col-span-12 md:col-span-3 text-center mb-16 md:mb-0">
    <div className="aspect-square max-w-28 mx-auto mb-4">
      <svg className="w-full h-full text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
        {icon}
      </svg>
    </div>
    <h3 className='text-6xl font-poppins font-extralight text-white pb-4'>{year}</h3>
    <span className='text-2xl font-montserrat font-extralight text-white pb-4'>{label}</span>
  </div>
);

const Features = () => {
  return (
    <div className='bg-cover md:bg-fixed mb-24' style={{ backgroundImage: `url(${SZYM_parking_001})`, backgroundRepeat: 'no-repeat' }}>
      <div className="bg-black/[0.65] py-48">
        <div className="container mx-auto">
          <div className="grid grid-cols-12">
            {featuresData.map((feature, index) => (
              <FeatureItem key={index} {...feature} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
