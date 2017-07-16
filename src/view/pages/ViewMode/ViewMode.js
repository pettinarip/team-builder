import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import { shareCodeActions } from 'core/shareCode'

import FieldContainer from 'view/containers/FieldContainer'

class ViewMode extends Component {
  componentDidMount () {
    const code = this.props.match.params.shareCode
    this.props.loadShareCode(code)
  }

  render () {
    return (
      <article className='main'>
        <section className='container'>
          <div className='main__field main--readonly'>
            <FieldContainer />
          </div>
        </section>
      </article>
    )
  }
}

ViewMode.propTypes = {
  loadShareCode: PropTypes.func.isRequired,
  match: PropTypes.object.isRequired
}

export default connect(
  null,
  shareCodeActions
)(ViewMode)
