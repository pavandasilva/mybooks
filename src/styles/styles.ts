import styled from 'styled-components';

interface LabelProps {
  category?: string;
}

export const Container = styled.div`
  width: 900px;
  margin-top: 45px;
`;

export const ModalOverlay = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgba(0, 0, 0, 0);
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 10;
  position: fixed;
  animation: faeOutRGBA 300ms linear;
  animation-fill-mode: both;
  z-index: 999;

  @keyframes faeOutRGBA {
    0% {
      background-color: rgba(0, 0, 0, 0);
    }
    100% {
      background-color: rgba(0, 0, 0, 0.85);
    }
  }
`;

export const Label = styled.div<LabelProps>`
  display: flex;
  width: 70px;
  height: 16px;
  background-color: red;
  margin-top: 10px;
  justify-content: center;
  align-items: center;
  border-radius: 7px;
  padding: 0;

  span {
    color: #fff;
    margin: 0;
    padding: 0;
    font-size: 12px;
  }
`;
