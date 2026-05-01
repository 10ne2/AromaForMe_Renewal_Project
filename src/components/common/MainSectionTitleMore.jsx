import React from 'react'
import { Link } from 'react-router-dom'

const MainSectionTitleMore = ({title}) => {
    return (
        <div className="sectionTitle">
            <h2>{title}</h2>
            <Link to="/list" className='sectionTitleMore'>더보기 ▶</Link>
            <span className='sectionTitleLine'></span>
        </div>
    )
}

export default MainSectionTitleMore