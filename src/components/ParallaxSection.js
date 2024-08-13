import * as React from 'react'

const ParallaxSection = () => {
  return (
    <div>
        {/* Parallax background layer */}
        <div className="relative overflow-hidden h-screen">
            <div className='parallax-layer bg-fixed bg-cover bg-center h-screen md:bg-scroll' style={{ backgroundImage: 'url("/path-to-your-image.jpg")' }}>
                <div className="absolute inset-0 bg-black opacity-50"></div>
            </div>
            <div className="absolute inset-0 flex items-center justify-center text-white">
                <h1 className="text-5xl font-bold">Parallax Effect</h1>
            </div>
        </div>
    </div>
  )
}

export default ParallaxSection