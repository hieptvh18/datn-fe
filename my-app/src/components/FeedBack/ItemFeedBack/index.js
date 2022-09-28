import React from 'react'
import "../styles.scss"
import iconQuote from '../../../assets/image/left-quote.png'

const ItemFeedBack = (props) => {
    return (
        <div>
            <div className='cs-block-feefBack'>
                <img width='30px' src={iconQuote} />
                <p className='mt-5 pb-5 text-2xl'>{props.content}</p>
            </div>
            <div className='flex align-items-center column-gap-4'>
                <div className='cs-avatar-feedback'>
                    <img className='' src={props.image_account} />
                </div>
                <div>
                    <h4 className='c-primary text-3xl font-bold'>{props.name_account}</h4>
                    <p className='font-italic font-light text-400 mt-1'>{props.role_account}</p>
                </div>
            </div>
        </div>
    )
}

export default ItemFeedBack