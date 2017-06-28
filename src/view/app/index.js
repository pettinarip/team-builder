import React from 'react'
import PropTypes from 'prop-types'

import Header from 'view/components/Header'
import Footer from 'view/components/Footer'
import ModalRoot from 'view/containers/ModalRoot'

function App ({ children }) {
  return (
    <div>
      <Header />
      {children}
      <Footer />
      <ModalRoot />
    </div>
  )
}

App.propTypes = {
  children: PropTypes.element
}

export default App
