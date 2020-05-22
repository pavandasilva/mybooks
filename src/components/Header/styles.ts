import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 75px;
  padding: 0px 70px;
  background-image: linear-gradient(180deg, #ee4455 0%, #f15f4a 100%);
  border-bottom-left-radius: 60px;
  border-bottom-right-radius: 60px;
  filter: drop-shadow(0px 16px 25.5px rgba(0, 0, 0, 0.3));
`;

export const Logo = styled.img`
  width: 170px;
  height: auto;
`;

export const Menu = styled.ul`
  list-style: none;
  padding: 0px;
  margin: 0px;

  li {
    margin: 30px;
    display: inline;
    font-size: 16px;
    color: #d7d7d7;
    font-weight: 400;
    cursor: pointer;

    :hover {
      transition: 3ms;
      color: #fff;
    }
  }
`;

export const User = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  font-weight: bold;
  color: #fff;

  span {
    font-weight: normal;
    font-size: 16px;
  }
`;
