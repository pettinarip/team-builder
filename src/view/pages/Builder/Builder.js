import React from 'react'
import { connect } from 'react-redux'

import Toolbar from 'view/components/Toolbar'

import FieldContainer from 'view/containers/FieldContainer'
import LayoutSelectorContainer from 'view/containers/LayoutSelectorContainer'
import PlayerContainer from 'view/containers/PlayerContainer'
import SportSelector from 'view/components/SportSelector'
import AccountContainer from 'view/containers/AccountContainer'
import ShareCodeContainer from 'view/containers/ShareCodeContainer'

let Builder = () => (
  <article className='main'>
    <Toolbar>
      <AccountContainer />
    </Toolbar>
    <section className='container'>
      <div className='main__settings'>
        <SportSelector />
        <PlayerContainer />
        <LayoutSelectorContainer />
      </div>
      <div className='main__field'>
        <FieldContainer />
      </div>
    </section>
    <ShareCodeContainer />
  </article>
)

export default connect(
  null
)(Builder)
