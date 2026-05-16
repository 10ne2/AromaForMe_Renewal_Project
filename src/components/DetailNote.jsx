import React from 'react'

import { note } from "../constants/detailIndex"

const DetailNote = () => {
  return (
    <div id='detailNote'>
      <div className="detailNote__inner">
        <div className="detailNote__total">
          <h2>{note[0].title}</h2>
          <span>{note[0].desc}</span>
        </div>
        <div className="detailNote__summation">
          <h2>{note[1].title}</h2>
          <div className="contents">
            {note[1].desc.map((sum, key) => (
              <div className="item">
                <span className='name'>{sum.name}</span>
                <span className='content'>{sum.content}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="detailNote__delivery">
          <h2>{note[2].title}</h2>
          <div className="contents">
            {note[2].desc.map((sum, key) => (
              <div className="item">
                <span className='name'>{sum.name}</span>
                <span className='content'>{sum.content}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default DetailNote