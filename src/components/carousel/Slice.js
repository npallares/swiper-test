import React from 'react'

import './Slice.css'
export const Slice = ({index}) => {
  return (
    <div className='slice-container'>
      <div className='content-column'>
        <div className='slice-content-section'>
            <p>UPD, el último primer día de clases. El primer día de un crimen.</p>
            <div className='slice-button-container'>
              <button className='btn-primary'>REPRODUCIR</button>
              <button className='btn-secondary'>MÁS INFO</button>
            </div>
        </div>
      </div>
      <img src={`https://picsum.photos/2500/500?random=${index}`} alt={`${index}`}/>
    </div>
  )
}
