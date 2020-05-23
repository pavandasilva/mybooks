import styled from 'styled-components';

interface SelectStyleProps {
  error?: string;
}

export const Container = styled.div<SelectStyleProps>`
  label {
    line-height: 25px;
    display: block;
  }

  div {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    border-radius: 24px;
    border-color: ${(props) => (props.error ? '#ee4455' : '#676767')};
    border-style: solid;
    border-width: ${(props) => (props.error ? '2px' : '1px')};

    textarea {
      resize: none;
      width: 95%;
      border: none;
      margin: 10px;
      padding: 10px;

      &::-webkit-scrollbar {
        width: 8px;
        background-color: #f5f5f5;
      }

      &::-webkit-scrollbar-thumb {
        border-radius: 14px;
        width: 8px;
        background-color: #ee4455;
      }
    }
  }

  span {
    display: block;
    margin-top: 5px;
    color: #ee4455;
  }
`;
