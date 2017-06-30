import React from 'react'
import PropTypes from 'prop-types'
import SettingField from '../SettingField'

const ShareCode = ({ code, generateShareCode }) => (
  <section className='share-code'>
    <SettingField title='Share this team with your teammates!'>
      <div className='code'>
        {
          code
          ? <input readOnly type='text' value={code} />
          : <button type='button' className='button' onClick={generateShareCode}>Generate code</button>
        }
      </div>
    </SettingField>
  </section>
)

ShareCode.propTypes = {
  code: PropTypes.string,
  generateShareCode: PropTypes.func.isRequired
}

export default ShareCode
