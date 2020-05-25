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

  label {
    & + label {
      margin-top: 15px;
    }
  }

  h1 {
    font-size: 16px;
    font-weight: bold;
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
    border: 2px solid #acacac;
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

export const BottomContent = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
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

export const Close = styled.div`
  display: flex;
  justify-content: flex-end;
  right: 15px;
  top: 15px;
  position: absolute;
  width: 50px;
  height: 50px;
  cursor: pointer;

  svg {
    width: 25px;
    height: 25px;
    color: #fff;
  }
`;
