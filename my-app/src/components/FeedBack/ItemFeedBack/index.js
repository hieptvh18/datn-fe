import React from 'react'
import "../styles.scss"
import iconQuote from '../../../assets/image/left-quote.png'

const ItemFeedBack = (props) => {
    return (
        <div key={props.key}>
            <div className='cs-block-feefBack'>
                <img width='30px' src={iconQuote} />
                <p className='mt-5 z-4 pb-5 text-2xl'>{props.content}</p>
            </div>
            <div className='flex align-items-center column-gap-4'>
                <div className='cs-avatar-feedback'>
                    <img className=''  src={'http://localhost:8000/' + props.customer_avatar}/>
                </div>
                <div>
                    <h4 className='c-primary text-3xl font-bold'>{props.customer_name}</h4>
                    <p className='font-italic font-light text-400 mt-1'>{props.customer_email}</p>
                </div>
            </div>
        </div>
    )
}

export default ItemFeedBack