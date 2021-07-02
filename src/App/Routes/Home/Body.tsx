import React from 'react'
import { images } from "../../constants/imageLinks"

const Body: React.FC = () => {
    return (
        <div className = 'bg-purple-700 w-screen flex items-center justify-center py-24'>
          <div className = 'w-3/4'>
            <div className = 'w-full flex items-center'>
              <img src = {images.landingPage.BLINKING_WAVING_HAND} />
              <h2 className = 'text-white font-display font-bold text-2xl md:text-5xl ml-2 md:ml-6'>Welcome</h2>
            </div>
            <div className = 'w-full flex flex-col-reverse md:flex-row mt-8 md:mt-16 items-start md:items-center bg-white h-20'>
              <div><img src={images.landingPage.WORKSPACE} alt="" className = 'md:transform md:translate-y-5' /></div>
              <div>text area</div>
            </div>
          </div>
        </div>
    )
}

export default Body