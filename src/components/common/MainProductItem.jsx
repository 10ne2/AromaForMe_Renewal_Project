import React from 'react'

import cart from "../../assets/img/cart.png"

const MainProductItem = ({img, title, prePrice, price}) => {
    return (
        <div>
            <div className="img">
                <img src={img} alt='상품이미지' />
            </div>
            <div className="info">
                <h3 className='name'>{title}</h3>
                <span className='prePrice'>{prePrice}</span>
                <div className="">
                    <span className='price'>{price}</span>
                    <div className="cart">
                        <img src={cart} alt='장바구니' />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MainProductItem