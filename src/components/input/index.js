import React from 'react'
import PropTypes from 'prop-types'

import { StyledInput } from "./StyledInput";

function Input({ inputProps, containerStyle }) {
  return (
    <StyledInput containerStyle={containerStyle}>
      <input {...inputProps} className="input-field" />
    </StyledInput>
  )
}

Input.PropTypes = {
  inputProps: PropTypes.any,
  containerStyle: PropTypes.string,
}

Input.defaultProps = {
  inputProps: {},
  containerStyle: ``,
}

export default Input
