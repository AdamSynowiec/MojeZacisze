import React from 'react'
import { FaBed, FaHome, FaTree, FaParking, FaCalendar } from 'react-icons/fa'
import SZYM_parking_001 from '../../assets/images/SZYM_parking_001.jpg'

const Features = () => {
  return (
    <div className='mb-24'
      style={{
        backgroundImage: `url(${SZYM_parking_001})`,
        backgroundSize: '100%',
        backgroundAttachment: 'fixed'
      }}
    >
      <div className="bg-black/[0.35] py-24">
        <section>
          <div className="container mx-auto px-4">
            <div className="grid gap-4 *:text-center md:grid-cols-5 dark:[--ui-soft-bg:var(--ui-bg)]">
              <div className="relative rounded-md bg-white/[0.1] hover:bg-mainColor/[0.1] backdrop-blur-md shadow-md card variant-soft space-y-4 py-12 text-white transition-all">
                <div className="absolute top-[-30px] border-4 border-white/[0.5] left-1/2 transform -translate-x-1/2 bg-mainColor text-white rounded-full p-4 text-4xl">
                  <FaHome /> {/* Icon */}
                </div>
                <div className="text-title text-5xl font-semibold font-poppins">55-76 m<sup>2</sup></div>
                <p className="text-body font-montserrat">Powierzchnia</p>
              </div>
              <div className="relative rounded-md bg-white/[0.1] hover:bg-mainColor/[0.1] backdrop-blur-md shadow-md card variant-soft space-y-4 py-12 text-white transition-all">
                <div className="absolute top-[-30px] border-4 border-white/[0.5] left-1/2 transform -translate-x-1/2 bg-mainColor text-white rounded-full p-4 text-4xl">
                  <FaCalendar /> {/* Icon */}
                </div>
                <div className="text-title text-5xl font-semibold font-poppins">2025</div>
                <p className="text-body font-montserrat">Rok budowy</p>
              </div>
              <div className="relative rounded-md bg-white/[0.1] hover:bg-mainColor/[0.1] backdrop-blur-md shadow-md card variant-soft space-y-4 py-12 text-white transition-all">
                <div className="absolute top-[-30px] border-4 border-white/[0.5] left-1/2 transform -translate-x-1/2 bg-mainColor text-white rounded-full p-4 text-4xl">
                  <FaTree /> {/* Icon */}
                </div>
                <div className="text-title text-5xl font-semibold font-poppins">50-100 m<sup>2</sup></div>
                <p className="text-body font-montserrat">Ogród i taras</p>
              </div>
              <div className="relative rounded-md bg-white/[0.1] hover:bg-mainColor/[0.1] backdrop-blur-md shadow-md card variant-soft space-y-4 py-12 text-white transition-all">
                <div className="absolute top-[-30px] border-4 border-white/[0.5] left-1/2 transform -translate-x-1/2 bg-mainColor text-white rounded-full p-4 text-4xl">
                  <FaBed /> {/* Icon */}
                </div>
                <div className="text-title text-5xl font-semibold font-poppins">3-6</div>
                <p className="text-body font-montserrat">Sypialnie</p>
              </div>
              <div className="relative rounded-md bg-white/[0.1] hover:bg-mainColor/[0.1] backdrop-blur-md shadow-md card variant-soft space-y-4 py-12 text-white transition-all">
                <div className="absolute top-[-30px] border-4 border-white/[0.5] left-1/2 transform -translate-x-1/2 bg-mainColor text-white rounded-full p-4 text-4xl">
                  <FaParking /> {/* Icon */}
                </div>
                <div className="text-title text-5xl font-semibold font-poppins">16</div>
                <p className="text-body font-montserrat">Miejsc parkingowych</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}

export default Features
