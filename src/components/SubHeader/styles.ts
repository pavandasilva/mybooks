import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: flex-end;
  max-width: 1050px;
`;

export const BookActions = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const BookRegister = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;

  svg {
    fill: #ee4455;
  }

  span {
    color: #ee4455;
    font-weight: bold;
    margin: 0 75px 0 10px;
  }
`;

export const Search = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  border-radius: 24px;
  border: 1px solid #acacac;
  background-color: #fff;
  width: 220px;
  padding-left: 15px;

  svg {
    height: 18px;
    width: 18px;
    fill: #acacac;
  }

  input {
    height: 28px;
    border: none;
    width: 100%;
    margin: 0;
    padding: 0px 10px;
    border-style: none;
    background-color: transparent;
    font-size: 16px;

    color: #3e3e3e;

    ::placeholder {
      color: #acacac;
    }
  }
`;
