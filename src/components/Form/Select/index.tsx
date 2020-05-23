import React, { useRef, useEffect } from 'react';
import { useField } from '@unform/core';

import { Container } from './styles';

interface SelectOptions {
  value: string;
  label: string;
}

interface Props {
  name: string;
  label?: string;
  options?: SelectOptions[];
}

type SelectProps = JSX.IntrinsicElements['select'] & Props;

const Select: React.FC<SelectProps> = ({ name, label, options, ...rest }) => {
  const selectRef = useRef(null);

  const { fieldName, defaultValue, registerField } = useField(name);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: selectRef.current,
      path: 'value',
    });
  });
  return (
    <Container>
      {label && <label htmlFor={fieldName}>{label}</label>}
      <select defaultValue={defaultValue} ref={selectRef} {...rest}>
        {options &&
          options.map(({ value, label: labelOption }) => (
            <option value={value}>{labelOption && labelOption}</option>
          ))}
      </select>
    </Container>
  );
};
export default Select;
