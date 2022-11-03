import React from 'react'
import "./styles.scss"

const ContactMessage = () => {
    const link = "https://www.facebook.com/messages/t/100040205860128"
    const zalo = "https://zalo.me/0372559460"
  return (
    <>
        <div className='fixed-mess'>
            <a href={link} target="_blank">
                <div className='w-mess face'>
                    <img className='w-full h-full' title='Chat Facebook với Nha Khoa Đức Nghĩa' src='https://res.cloudinary.com/dbpw1enlu/image/upload/v1667448245/facebook-messenger-icon_ekx1oh.webp'/>
                </div>
            </a>
        </div>
        <div className='fixed-zalo'>
            <a href={zalo} target="_blank">
                <div className='w-mess face'>
                    <img className='w-full h-full' title='Chat Zalo với Nha Khoa Đức Nghĩa' src='https://res.cloudinary.com/dbpw1enlu/image/upload/v1667449009/zalo-icon_sweel2.png'/>
                </div>
            </a>
        </div>
    </>
  )
}

export default ContactMessage