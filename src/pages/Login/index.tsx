import React from 'react';

import { Container, PatternLogin, LogoWrapper,Line } from './styles';
import goit from '../../assets/goit.png';
import patternLogin from '../../assets/pattern-login.svg';

import LoginBox from './components/LoginBox';

const Login: React.FC = () => {
  return (
    <Container>
      <PatternLogin src={patternLogin} alt="pattern" />
      <Line></Line>
      <LoginBox />
      <LogoWrapper>
        <img src={goit} alt="" />
      </LogoWrapper>

      
    </Container>
  );
};

export default Login;
