import React from 'react'
import { DragDropContext } from 'react-dnd'
import HTML5Backend from 'react-dnd-html5-backend'
import FieldContainer from '../../containers/FieldContainer'
import LayoutSelectorContainer from '../../containers/LayoutSelectorContainer'
import PlayerContainer from '../../containers/PlayerContainer'
import SportSelector from '../SportSelector'

const App = () => {
  return (
    <div className='container'>
      <header>
        <h1 className='super-title'>Team lineup</h1>
        <p>Build your team and shear it with your teammates!</p>
      </header>
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
      <footer>
        <div className='footer-link'>
          <small>by</small> <a href='https://github.com/pettinarip' target='_blank'>@pettinarip</a>
        </div>
      </footer>
    </div>
  )
}

export default DragDropContext(HTML5Backend)(App)
