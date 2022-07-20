import React from 'react'
import StyledNightMode from './styles/StyledNightMode'

const NightMode = ({ nightMode, nightModeCallBack }) => {
  return (
    <StyledNightMode>
        <span>NightMode:</span>
        <label className='switch'>
          <input type="checkbox" checked={nightMode} onChange={nightModeCallBack} />
          <span className='round slider'/>
        </label>
    </StyledNightMode>
  )
}

export default NightMode