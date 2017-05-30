import React from 'react'
import SettingField from '../SettingField'

const SportSelector = () => {
  return (
    <SettingField title='Sport'>
      <div className='list'>
        <div className='item selected'>
          <div
            className='layout-description'
          >
            Football
          </div>
        </div>
      </div>
    </SettingField>
  )
}

SportSelector.propTypes = {}

export default SportSelector
