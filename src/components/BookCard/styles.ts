import { Link } from 'react-router-dom';
import styled from 'styled-components';

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
`;

export const LinkButton = styled(Link)`
  display: flex;
  margin-top: 10px;
  width: 95px;
  height: 30px;
  border-radius: 19px;
  background-color: #ffffff;
  border: 2px solid #676767;
  font-size: 12px;
  color: #676767;
  text-decoration: none;
  justify-content: center;
  align-items: center;

  &:hover {
    transition-delay: 7ms;
    color: #232323;
    border-color: #232323;
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
    max-height: 51%;
    overflow: hidden;
  }
`;
