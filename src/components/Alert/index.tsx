import React, { FC } from 'react';
import { FaRegSmileWink, FaMehBlank, FaTimes } from 'react-icons/fa';

import { useAlert } from '../../hooks/alert';

import { ModalOverlay } from '../../styles/styles';
import { AlertBox, DialogBox, Close } from './styles';

interface AlertProps {
  type: 'success' | 'warning';
  body?: string;
}

const Alert: React.FC<AlertProps> = ({ type, body }: AlertProps) => {
  const { hideAlert } = useAlert();

  return (
    <ModalOverlay>
      <AlertBox type={type}>
        <Close onClick={hideAlert}>
          <FaTimes />
        </Close>
        {type === 'success' ? <FaRegSmileWink /> : <FaMehBlank />}
        <span>{type === 'success' ? 'Tudo certo!' : 'Atenção!'}</span>
        <p>{body}</p>
        {type === 'warning' && (
          <DialogBox>
            <button type="button">Cancelar</button>
            <button type="button">Confirmar</button>
          </DialogBox>
        )}
      </AlertBox>
    </ModalOverlay>
  );
};

export default Alert;
