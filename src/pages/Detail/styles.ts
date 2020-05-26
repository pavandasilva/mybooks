import styled from 'styled-components';

export const Container = styled.div``;

export const BookContent = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 40px;
  max-width: 500px;
`;

export const RightContent = styled.div`
  span {
    font-weight: bold;
  }

  p {
    margin-top: 10px;
  }

  display: flex;
  flex-direction: column;
  flex: 1;
  width: 100%;
  margin-left: 30px;
`;

export const LeftContent = styled.div`
  div {
    width: 200px;
    border-radius: 24px;
    overflow: hidden;

    img {
      width: 100%;
      height: auto;
      border-radius: 24px;
    }
  }
`;
