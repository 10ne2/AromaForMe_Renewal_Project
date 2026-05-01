import React from 'react'

const TopTenItem = ({ key, num, img, name, className }) => {
    return (
        <div className={className}>
            <div className="slideItem" key={key}>
                <div className="top">
                    <span>{num}</span>
                </div>
                <div className="proImg">
                    <img src={img} alt='상품이미지' />
                </div>
                <h3 className='name'>{name}</h3>
            </div>
        </div>
    )
}

export default TopTenItem