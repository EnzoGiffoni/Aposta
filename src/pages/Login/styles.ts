import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  background-color: #eaeaea;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  position: block;
  height: 100vh;
`;

export const PatternLogin = styled.img`
  min-width: 100%;
  position: absolute;
`;

export const Line = styled.div`
background-color: #302476;
width: 30rem;
height: 2px;
border-radius: 15px;
margin: 0 auto;
`;

export const LogoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  justify-content: flex-end;
  align-items: center;
  width: 100%;
  margin-top: 5rem;
  bottom: 100px;
`;
