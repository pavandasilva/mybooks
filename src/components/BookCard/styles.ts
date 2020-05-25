import styled, { css } from 'styled-components';

interface LabelProps {
  category?: 'read' | 'reading' | 'want_read';
}

const labelCategoryVariations = {
  read: css`
    background-color: blueviolet;
  `,
  reading: css`
    background-color: blue;
  `,
  want_read: css`
    background-color: red;
  `,
};

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 35px 45px;
  width: 432px;
  height: 260px;
  border-radius: 16px;
  filter: drop-shadow(0px 2px 13px rgba(0, 0, 0, 0.15));
  background-color: #ffffff;
  margin-bottom: 35px;
`;

export const LeftContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  div {
    width: 95px;
    height: 141px;
    background-color: #acacac;
    border-radius: 24px;
    overflow: hidden;

    img {
      width: 100%;
      height: auto;
    }
  }

  button {
    margin-top: 20px;
    border: none;
    padding: 0;
    background: none;
    width: 95px;
    height: 30px;
    border-radius: 19px;
    background-color: #ffffff;
    border: 2px solid #676767;
    font-size: 12px;
    color: #676767;

    &:hover {
      transition-delay: 7ms;
      color: #232323;
      border-color: #232323;
    }
  }
`;

export const RightContent = styled.div`
  padding: 0px 25px;

  h1 {
    font-size: 14px;
    font-weight: bold;
  }
  p {
    margin-top: 10px;
  }
`;

export const Label = styled.div<LabelProps>`
  display: flex;
  width: 70px;
  height: 16px;
  margin-top: 10px;
  justify-content: center;
  align-items: center;
  border-radius: 7px;
  ${(props) => labelCategoryVariations[props.category || 'read']};
  padding: 0;

  span {
    color: #fff;
    margin: 0;
    padding: 0;
    font-size: 12px;
  }
`;
