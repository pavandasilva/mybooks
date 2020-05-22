import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  padding: 45px 30px;
  width: 500px;
  height: auto;
  border-radius: 20px;
  filter: drop-shadow(5px 0px 27.5px #000000);
  background-color: #ffffff;

  h1 {
    font-size: 16px;
    font-weight: bold;
  }

  input {
    height: 28px;
    width: 100%;
    margin: 0;
    padding: 0px 10px;

    ::placeholder {
      color: #acacac;
    }
  }

  div:first-of-type {
    svg {
      fill: #676767;
    }

    &:hover {
      svg {
        fill: #000000;
      }
    }
  }

  input,
  textarea,
  select {
    font-size: 14px;
    border: #acacac 1px solid;
    color: #676767;
  }

  label {
    line-height: 25px;
    & + label {
      margin: 10px 0px;
    }

    display: block;
  }
`;

export const BasicFields = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-top: 35px;
`;

export const RightContent = styled.div`
  padding: 10px;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: flex-end;

  span {
    margin-top: 10px;
    font-size: 12px;
    align-self: center;
  }

  div {
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #acacac;
    width: 150px;
    border: 2px dotted #acacac;
    border-radius: 24px;
    overflow: hidden;

    img {
      width: 100%;
      height: auto;
      border-radius: 24px;
    }
  }
`;

export const LeftContent = styled.div`
  width: 100%;
  margin-right: 30px;
`;

export const TextArea = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  border-radius: 24px;
  border: #acacac 1px solid;

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
`;

export const BottomContent = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const Select = styled.div`
  width: 100%;

  select {
    background-color: #fff;
    width: 270px;
    height: 28px;
    border-radius: 14px;
    color: #676767;
    padding-left: 10px;
  }
`;

export const Controllers = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-top: 35px;

  button {
    padding: 0;
    width: 95px;
    height: 30px;
    border-radius: 19px;
    font-size: 12px;
    color: #fff;
  }

  button:first-of-type {
    background-color: #ee4455;
  }

  button:last-of-type {
    background-color: #3aba6f;
  }
`;
