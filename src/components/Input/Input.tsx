import { FC } from 'react';
import { IProps } from './Input.types';
import { InputWrap, StyledInput } from './Input.styled';

const Input: FC<IProps> = ({ settings, placeholder, type, btn }) => {
  const input = (
    <StyledInput {...settings} type={type} placeholder={placeholder} />
  );

  return btn ? (
    <InputWrap>
      {input}
      {btn}
    </InputWrap>
  ) : (
    input
  );
};

export default Input;
