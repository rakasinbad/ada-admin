import React, { Component } from 'react'
import { connect } from 'react-redux'

import { StyledLogin, Wrapper } from './styles/StyledLogin'
import { Typography } from '../themes'
import Container from '../components/container'
import Input from '../components/input'
import Button from '../components/button'

const { Title } = Typography

export class Login extends Component {
  render() {
    return (
      <Container>
        <StyledLogin>
          <Wrapper>
            <Title customStyle={` color: black; `}>Admin Login</Title>
            <Input inputProps={{ placeholder: "Phone number" }} containerStyle={` margin-top: 33px; `} />
            <Input inputProps={{ placeholder: "Password" }} />
            <Button 
              text="Register"
            />
          </Wrapper>
        </StyledLogin>
      </Container>
    )
  }
}

const mapStateToProps = (state) => ({
  
})

const mapDispatchToProps = {
  
}

export default connect(mapStateToProps, mapDispatchToProps)(Login)
