import React from 'react'
import PropTypes from 'prop-types'

const LayoutSelector = ({ layouts, selected, onLayoutClick }) => {
  return (
    <div className='layout-selector list-container'>
      <div className='list'>
        {layouts.map(layout =>
          <div
            className={
              selected && selected.id === layout.id
              ? 'item selected'
              : 'item'
            }
            key={layout.id}
          >
            <div
              className='layout-description'
              onClick={() => onLayoutClick(layout.id)}
            >
              {layout.name}
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
