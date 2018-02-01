import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { DropTarget } from 'react-dnd'

import ItemTypes from 'core/constants/ItemTypes'
import { modalsActions } from 'core/modals'
import { positionsActions } from 'core/positions'
import { getInactivePlayers } from 'core/selectors'

import SettingField from 'view/components/SettingField'
import PlayerSelector from 'view/components/PlayerSelector'

function collect (connect, monitor) {
  return {
    connectDropTarget: connect.dropTarget(),
    isOver: monitor.isOver()
  }
}

const PlayerContainer = ({ players, connectDropTarget, ...props }) => {
  return connectDropTarget(
    <div>
      <SettingField title='Players'>
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
  connectDropTarget: PropTypes.func.isRequired,
  isOver: PropTypes.bool.isRequired,
  showAddPlayerModal: PropTypes.func.isRequired
}

const mapStateToProps = (state) => ({
  players: getInactivePlayers(state)
})

const mapDispatchToProps = {
  addPlayerPosition: positionsActions.addPlayerPosition,
  showAddPlayerModal: modalsActions.showAddPlayerModal
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DropTarget(ItemTypes.PLAYER, {}, collect)(PlayerContainer))
