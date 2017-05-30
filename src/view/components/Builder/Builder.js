import React from 'react'
import PropTypes from 'prop-types'
import { DragDropContext } from 'react-dnd'
import HTML5Backend from 'react-dnd-html5-backend'

import FieldContainer from 'view/containers/FieldContainer'
import LayoutSelectorContainer from 'view/containers/LayoutSelectorContainer'
import PlayerContainer from 'view/containers/PlayerContainer'

import SportSelector from 'view/components/SportSelector'

const Builder = ({ signOut }) => {
  return (
    <section className='content'>
      <div className='left-content'>
        <SportSelector />
        <LayoutSelectorContainer />
        <PlayerContainer />
      </div>
      <div className='right-content'>
        <FieldContainer />
      </div>
    </section>
  )
}

Builder.propTypes = {
  signOut: PropTypes.func.isRequired
}

export default DragDropContext(HTML5Backend)(Builder)
