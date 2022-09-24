import React from 'react'
import "../styles.scss"

const ItemFeedBack = () => {
  return (
    <div>
        <div className='cs-block-feefBack'>
            <img src='https://winsmile.vn/public/template/frontend/img/icon_10.png'/>
            <p className='mt-5 pb-5 text-2xl'>Răng của Giang trước đây gặp rất nhiều vấn đề, răng khấp khểnh, cười hở lợi và không được trắng sáng.</p>
        </div>
        <div className='flex align-items-center column-gap-4'>
            <div className='overflow-hidden border-circle'>
                <img className='flex' src='https://res.cloudinary.com/dbpw1enlu/image/upload/v1663992986/46df469fe889ce5b252c36e57f982f57_m2nieq.jpg' width="90px"/>
            </div>
            <div>
                <h4 className='c-primary text-3xl font-bold'>Nghĩa Trương</h4>
                <p className='font-italic font-light text-400 mt-1'>Developer</p>
            </div>
        </div>
    </div>
  )
}

export default ItemFeedBack