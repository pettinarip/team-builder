import React from 'react'
import { connect } from 'react-redux'
import { DragDropContext } from 'react-dnd'
import HTML5Backend from 'react-dnd-html5-backend'

import Toolbar from 'view/components/Toolbar'
import FieldContainer from 'view/containers/FieldContainer'
import LayoutSelectorContainer from 'view/containers/LayoutSelectorContainer'
import PlayerContainer from 'view/containers/PlayerContainer'
import SportSelector from 'view/components/SportSelector'
import AccountContainer from 'view/containers/AccountContainer'

let Builder = () => (
  <article className='main'>
    <Toolbar>
      <AccountContainer />
    </Toolbar>
    <section className='container'>
      <div className='main__settings'>
        <SportSelector />
        <LayoutSelectorContainer />
        <PlayerContainer />
      </div>
      <div className='main__field'>
        <FieldContainer />
      </div>
    </section>
  </article>
)

Builder.propTypes = {}

Builder = DragDropContext(HTML5Backend)(Builder)

export default connect(
  null
)(Builder)
