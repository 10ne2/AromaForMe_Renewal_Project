import React from 'react'

const MiniCategory = () => {
    return (
        <div className="category">
            <span>홈</span>
            <span>▶</span>
            <div className='drop'>
                <span>라인별</span>
                <span>▼</span>
            </div>
            <span>▶</span>
            <div className='drop'>
                <span>닥터타피</span>
                <span>▼</span>
            </div>
        </div>
    )
}

export default MiniCategory