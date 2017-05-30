import React from 'react'

const SportSelector = () => {
  return (
    <div className='settings-field-wrapper'>
      <label className='settings-field-heading'>Sport</label>
      <div className='settings-field'>
        <div className='list'>
          <div className='item selected'>
            <div
              className='layout-description'
            >
              Football
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

SportSelector.propTypes = {}

export default SportSelector
