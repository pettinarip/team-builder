import { connect } from 'react-redux'

import ShareCode from 'view/components/ShareCode'

const mapStateToProps = (state) => ({
  code: `${window.location.origin}/view/Kl_1bHcvESCXFv2KRcl`
})

export default connect(
  mapStateToProps
)(ShareCode)
