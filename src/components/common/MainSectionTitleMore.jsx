import React from 'react'

const MainSectionTitleMore = ({title}) => {
    return (
        <div className="sectionTitle">
            <h2>{title}</h2>
            <span className='more'>더보기 ▶</span>
            <span className='line'></span>
        </div>
    )
}

export default MainSectionTitleMore