import styled from '@emotion/styled';
import { IStyledProps } from './RadioBtn.types';

export const Container = styled.label`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing(2)};
`;

export const Wrapper = styled.span`
  display: inline-block;
  padding: 2px;
`;

export const AltElem = styled.span<IStyledProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 20px;
  height: 20px;
  border: 2px solid;
  border-color: ${({ checked }) =>
    checked ? 'rgb(244, 197, 80)' : 'rgba(18, 20, 23, 0.2)'};
  border-radius: 50%;
`;

export const Marker = styled.span<IStyledProps>`
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background-color: ${({ checked }) =>
    checked ? 'rgb(244, 197, 80)' : 'transparent'};
`;

export const Title = styled.span`
  color: rgb(18, 20, 23);
  font-family: Roboto;
  font-size: 16px;
  font-weight: 400;
  line-height: 1.38;
  letter-spacing: 0%;
`;

export const Input = styled.input`
  position: absolute;
  transform: scale(0);
`;
