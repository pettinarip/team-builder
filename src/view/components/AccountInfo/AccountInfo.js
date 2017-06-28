import React from 'react'
import PropTypes from 'prop-types'

const AccountInfo = ({ name, authenticated, signOut }) => (
  <section className='account'>
    <div className='account__name'>Hi, {name || 'mysterious user'}</div>
    <div className='account__options'>
      {
        authenticated &&
        <a href='#' className='account__options__signout button' onClick={signOut}>Sign out</a>
      }
    </div>
  </section>
)

AccountInfo.propTypes = {
  name: PropTypes.string,
  authenticated: PropTypes.bool.isRequired,
  signOut: PropTypes.func.isRequired
}

export default AccountInfo
