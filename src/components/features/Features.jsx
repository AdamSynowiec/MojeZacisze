import React from 'react'
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
          <div class="container mx-auto px-4">

            <div class="grid gap-4 *:text-center md:grid-cols-5 dark:[--ui-soft-bg:var(--ui-bg)]">
              <div class="rounded-md bg-white/[0.1] hover:bg-mainColor/[0.1] backdrop-blur-md	shadow-md card variant-soft space-y-4 py-12 text-white transition-all">
                <div class="text-title text-5xl font-bold font-poppins">55-76 m<sup>2</sup></div>
                <p class="text-body font-montserrat">Powierzchnia</p>
              </div>
              <div class="rounded-md bg-white/[0.1] hover:bg-mainColor/[0.1] backdrop-blur-md	shadow-md card variant-soft space-y-4 py-12 text-white transition-all">
                <div class="text-title text-5xl font-bold font-poppins">2025</div>
                <p class="text-body font-montserrat">Rok budowy</p>
              </div>
              <div class="rounded-md bg-white/[0.1] hover:bg-mainColor/[0.1] backdrop-blur-md	shadow-md card variant-soft space-y-4 py-12 text-white transition-all">
                <div class="text-title text-5xl font-bold font-poppins">50-100 m<sup>2</sup></div>
                <p class="text-body font-montserrat">Ogród i taras</p>
              </div>
              <div class="rounded-md bg-white/[0.1] hover:bg-mainColor/[0.1] backdrop-blur-md	shadow-md card variant-soft space-y-4 py-12 text-white transition-all">
                <div class="text-title text-5xl font-bold font-poppins">3-6</div>
                <p class="text-body font-montserrat">Sypialnie</p>
              </div>
              <div class="rounded-md bg-white/[0.1] hover:bg-mainColor/[0.1] backdrop-blur-md	shadow-md card variant-soft space-y-4 py-12 text-white transition-all">
                <div class="text-title text-5xl font-bold font-poppins">16</div>
                <p class="text-body font-montserrat">Miejsc parkingowych</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}

export default Features