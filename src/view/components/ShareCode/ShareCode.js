import React from 'react'
import PropTypes from 'prop-types'
import SettingField from '../SettingField'

const ShareCode = ({ code }) => (
  <section className='share-code'>
    <SettingField title='Share this team with your teammates!'>
      <div className='code'>
        <input type='text' value={code} />
      </div>
    </SettingField>
  </section>
)

ShareCode.propTypes = {
  code: PropTypes.string.isRequired
}

export default ShareCode
