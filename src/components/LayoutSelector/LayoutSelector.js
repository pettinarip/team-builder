import React from 'react'
import PropTypes from 'prop-types'

const LayoutSelector = ({ layouts, selected, onLayoutClick }) => {
  return (
    <div className='layout-selector list-container'>
      <div className='list'>
        {layouts.map(layout =>
          <div
            className={`item ${selected && selected.id === layout.id ? 'selected' : ''}`}
            key={layout.id}
          >
            <div
              className='layout-description'
              onClick={() => onLayoutClick(layout.id)}
            >
              {layout.config.join('-')}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

LayoutSelector.propTypes = {
  layouts: PropTypes.array.isRequired,
  selected: PropTypes.object,
  onLayoutClick: PropTypes.func.isRequired
}

export default LayoutSelector
