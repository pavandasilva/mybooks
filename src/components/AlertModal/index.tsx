import React, { FC } from 'react';
import { FaRegSmileWink, FaMehBlank, FaTimes } from 'react-icons/fa';

import { Close, ModalOverlay } from '../../styles/styles';
import { AlertBox, DialogBox } from './styles';

interface AlertModalProps {
  type: string;
  body?: string;
}

const AlertModal: React.FC<AlertModalProps> = ({
  type,
  body,
}: AlertModalProps) => {
  return (
    <ModalOverlay>
      <AlertBox type={type}>
        <Close>
          <FaTimes />
        </Close>
        {type === 'success' ? <FaRegSmileWink /> : <FaMehBlank />}
        <span>{type === 'success' ? 'Tudo certo!' : 'Atenção!'}</span>
        <p>{body}</p>
        <DialogBox>
          <button type="button">Cancelar</button>
          <button type="button">Confirmar</button>
        </DialogBox>
      </AlertBox>
    </ModalOverlay>
  );
};

export default AlertModal;
