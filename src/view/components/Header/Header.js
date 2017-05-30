import React from 'react'
import PropTypes from 'prop-types'

const Header = ({ authenticated, signOut }) => (
  <header>
    <h1 className='super-title'>Team lineup</h1>
    <p>Build your team and shear it with your teammates!</p>
    <div>
      { authenticated && <button type='button' onClick={signOut}>Sign out</button> }
    </div>
  </header>
)

Header.propTypes = {
  authenticated: PropTypes.bool.isRequired,
  signOut: PropTypes.func.isRequired
}

export default Header
