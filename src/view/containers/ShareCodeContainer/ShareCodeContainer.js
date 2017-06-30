import { connect } from 'react-redux'

import { shareCodeActions } from 'core/shareCode'
import { getShareCode } from 'core/selectors'

import ShareCode from 'view/components/ShareCode'

const mapStateToProps = (state) => ({
  code: getShareCode(state)
})

export default connect(
  mapStateToProps,
  shareCodeActions
)(ShareCode)
