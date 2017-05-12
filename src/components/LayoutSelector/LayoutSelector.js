import React from 'react'
import PropTypes from 'prop-types'

const LayoutSelector = ({ layouts, onLayoutClick }) => {
  return (
    <div className='layout-selector list-container'>
      <div className='title'>Tactics</div>
      <div className='list'>
        <div className='item'>
          {layouts.map(layout =>
            <div
              className='layout-description'
              onClick={() => onLayoutClick(layout.id)}
              key={layout.id}
            >
              {layout.config.join('-')}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

LayoutSelector.propTypes = {
  layouts: PropTypes.array.isRequired,
  onLayoutClick: PropTypes.func.isRequired
}

export default LayoutSelector
