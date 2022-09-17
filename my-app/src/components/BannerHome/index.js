import React from 'react'
import './styles.scss'

const BannerHome = () => {
  return (
    <div style={{backgroundImage: "url(http://denticare.bold-themes.com/allen/wp-content/uploads/sites/16/2020/02/hero-2.jpg)"}} className='wrapper-banner-home'>
        <div className='content-banner-home'>
            <h3 className='text-7xl font-light c-primary'>Care For Your Smiler</h3>
            <h1 className='cs-text-banne-home line-height-1'>Committed To Excellence</h1>
            <div className='flex mt-8'>
                <div className='flex column-gap-5'>
                    <div className='img-icon-banner-home'>
                        <img src='https://res.cloudinary.com/dbpw1enlu/image/upload/v1663127408/image_2_nat93t.png'/>
                    </div>
                    <div className=''>
                        <p className='c-primary1 text-4xl font-medium'>Implants</p>
                        <p className='text-img-icon-banner-home mt-3 text-500 list-decimal'>Dramatically maintain clicks and mortar solutions without functional solutions.</p>
                    </div>
                </div>
                <div className='flex column-gap-5'>
                    <div className='img-icon-banner-home'>
                        <img src='https://res.cloudinary.com/dbpw1enlu/image/upload/v1663127408/image_2_nat93t.png'/>
                    </div>
                    <div className=''>
                        <p className='c-primary1 text-4xl font-medium'>Implants</p>
                        <p className='text-img-icon-banner-home mt-3 text-500 list-decimal'>Dramatically maintain clicks and mortar solutions without functional solutions.</p>
                    </div>
                </div> 
                
            </div>
            <button className='btn-banner-home mt-8'>Dental Solutions</button>
        </div>
    </div>
  )
}

export default BannerHome