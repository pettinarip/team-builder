import React from 'react'
import PropTypes from 'prop-types'
import Player from '../Player'

const Layout = ({ config }) => {
  return (
    <div className='layout'>
      {config.slice().reverse().map((lineCount, i) =>
        <div className='line' key={i}>
          {Array.apply(null, Array(lineCount)).map((n, i) =>
            <Player key={i} />
          )}
        </div>
      )}
    </div>
  )
}

Layout.propTypes = {
  config: PropTypes.array
}

export default Layout
