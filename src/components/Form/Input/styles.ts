import styled from 'styled-components';

interface InputStyleProps {
  error?: string;
}

export const Container = styled.div<InputStyleProps>`
  input {
    height: 28px;
    width: 100%;
    margin: 0;
    padding: 0px 10px;
    font-size: 14px;
    border-color: ${(props) => (props.error ? '#ee4455' : '#676767')};
    border-style: solid;
    border-width: ${(props) => (props.error ? '2px' : '1px')};
    color: #676767;

    ::placeholder {
      color: #acacac;
    }
  }

  label {
    line-height: 25px;
    display: block;
  }

  span {
    display: block;
    margin-top: 5px;
    color: #ee4455;
  }
`;
