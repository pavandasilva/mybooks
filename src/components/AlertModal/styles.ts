import styled from 'styled-components';

interface AlertModalStyledProps {
  type: string;
}

export const AlertBox = styled.div`
  display: flex;
  overflow: hidden;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  background-color: ${(props: AlertModalStyledProps): string =>
    props.type === 'success' ? '#3aba6f' : '#f58d37'};

  color: #fff;
  width: 450px;
  height: 300px;
  border-radius: 20px;
  filter: drop-shadow(4.994px 9.801px 27.5px #000000);
  font-size: 18px;
  padding: 25px;

  svg {
    width: 80px;
    height: 80px;
  }

  span {
    margin-top: 20px;
    font-weight: bold;
  }
  p {
    margin-top: 10px;
  }
`;

export const DialogBox = styled.div`
  padding: 15px;
  display: flex;
  justify-content: space-between;
  min-width: 100%;
  position: absolute;
  bottom: 0px;
  left: 0px;
  background-color: #fff;

  button {
    color: #fff;
    width: 120px;
    height: 35px;
    border-radius: 12px;
  }

  button:first-of-type {
    background-color: #ee4455;
  }

  button:last-of-type {
    background-color: #f58d37;
  }
`;
