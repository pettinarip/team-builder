import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { DropTarget } from 'react-dnd'
import ItemTypes from '../../constants/ItemTypes'
import * as actions from '../../actions'
import { getInactivePlayers } from '../../reducers'

import SettingField from '../../components/SettingField'
import PlayerSelector from '../../components/PlayerSelector'

function collect (connect, monitor) {
  return {
    connectDropTarget: connect.dropTarget(),
    isOver: monitor.isOver()
  }
}

const PlayerContainer = ({ players, connectDropTarget, ...props }) => {
  return connectDropTarget(
    <div>
      <SettingField title='Player'>
        <PlayerSelector
          players={players}
          onAddPlayerClick={props.showAddPlayerModal}
          onAddPlayerPosition={props.addPlayerPosition}
          onRemovePlayerPosition={props.removePlayerPosition}
        />
      </SettingField>
    </div>
  )
}

PlayerContainer.propTypes = {
  players: PropTypes.array,
  addPlayerPosition: PropTypes.func.isRequired,
  removePlayerPosition: PropTypes.func.isRequired,
  connectDropTarget: PropTypes.func.isRequired,
  isOver: PropTypes.bool.isRequired,
  showAddPlayerModal: PropTypes.func.isRequired
}

const mapStateToProps = (state) => ({
  players: getInactivePlayers(state)
})

export default connect(
  mapStateToProps,
  actions
)(DropTarget(ItemTypes.PLAYER, {}, collect)(PlayerContainer))
