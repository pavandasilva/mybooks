import React, { useEffect, useRef } from 'react';
import { useField } from '@unform/core';

import { Container } from './styles';

interface Props {
  name: string;
  label?: string;
  rows?: number;
}

type TextAreaProps = JSX.IntrinsicElements['textarea'] & Props;

const TextArea: React.FC<TextAreaProps> = ({ name, label, ...rest }) => {
  const textareaRef = useRef(null);

  const {
    fieldName,
    defaultValue,
    registerField,
    error,
    clearError,
  } = useField(name);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: textareaRef.current,
      path: 'value',
    });
  });

  return (
    <Container error={error}>
      {label && <label htmlFor={fieldName}>{label}</label>}
      <div>
        <textarea
          id={fieldName}
          ref={textareaRef}
          defaultValue={defaultValue}
          {...rest}
          onFocus={clearError}
        />
      </div>

      {error && <span>{error}</span>}
    </Container>
  );
};

export default TextArea;
