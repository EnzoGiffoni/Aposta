import styled from 'styled-components';
import { Form } from 'formik';

interface InputsWrapperProps {
  column?: boolean;
}

export const Container = styled(Form)`
  width: 610px;
  height: 629px;
  background-color: #fff;
  box-shadow: 0px 25px 25px rgba(0, 0, 0, 0.1);
  border-radius: 13px;

  padding: 28px 39px;

  .first {
    margin-top: 0;
  }
  .last {
    margin-top: 8px;
  }
`;

export const Title = styled.h2`
  font-size: 22px;
  font-weight: 300;
  letter-spacing: 0.55px;
  color: #222222;
`;

export const Section = styled.section`
  margin-top: 20px;
`;

export const TitleSectionWrapper = styled.div`
  width: 100%;
  height: 24px;
  border-bottom: 1px solid #dddddd;
`;

export const TitleSectionText = styled.span`
  font-size: 10px;
  font-weight: 700;
  line-height: 18px;
  letter-spacing: 2px;
  text-align: left;
  color: #ff5427;
`;

export const InputsWrapper = styled.div<InputsWrapperProps>`
  display: flex;
  justify-content: space-between;

  flex-direction: ${props => (props.column ? 'column' : 'row')};
  margin-top: 14px;
`;

export const ButtonWrapper = styled.div`
  margin-top: 25px;
`;
