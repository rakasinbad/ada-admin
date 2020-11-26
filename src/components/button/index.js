import React from 'react'
import PropTypes from 'prop-types'

import { StyledButton } from './StyledButton'

function Button({ text }) {
  return (
    <StyledButton>
      <p className="button-text">{text}</p>
    </StyledButton>
  )
}

Button.propTypes = {
  text: PropTypes.string,
}

Button.defaultProps = {
  text: '',
}

export default Button

