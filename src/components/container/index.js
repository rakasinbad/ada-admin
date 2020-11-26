import React from 'react'
import PropTypes from 'prop-types'

import { StyledContainer } from './StyledContainer'

function Container(props) {
  return (
    <StyledContainer {...props.styledProps}>
      {props.children}
    </StyledContainer>
  )
}

Container.PropTypes = {
  children: PropTypes.node,
  styledProps: PropTypes.any,
}

Container.defaultProps = {
  children: null,
  styledProps: {},
}

export default Container

