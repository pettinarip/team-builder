import React from 'react'
import { DragDropContext } from 'react-dnd'
import HTML5Backend from 'react-dnd-html5-backend'
import FieldContainer from '../FieldContainer'
import LayoutSelectorContainer from '../LayoutSelectorContainer'
import PlayerContainer from '../PlayerContainer'

const App = () => {
  return (
    <div className='container'>
      <LayoutSelectorContainer />
      <div className='content'>
        <FieldContainer />
      </div>
      <PlayerContainer />
    </div>
  )
}

export default DragDropContext(HTML5Backend)(App)
