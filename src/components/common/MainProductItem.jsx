import React from 'react'

import cart from "../../assets/img/cart.png"

const MainProductItem = ({img, title, prePrice, price}) => {
    return (
        <div>
            <div className="mainProimg">
                <img src={img} alt='상품이미지' />
            </div>
            <div className="mainProinfo">
                <h3 className='mainProname'>{title}</h3>
                <span className='mainProprePrice'>{prePrice}</span>
                <div className="">
                    <span className='mainProprice'>{price}</span>
                    <div className="mainProcart">
                        <img src={cart} alt='장바구니' />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MainProductItem