import styled from '@emotion/styled';
import { IStyledProps } from './FilterItem.types';

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing(2)};
`;

export const Title = styled.span`
  color: rgb(138, 138, 137);
  font-family: Roboto;
  font-size: 14px;
  font-weight: 500;
  line-height: 1.29;
  letter-spacing: 0;
  text-align: left;
`;

export const InputWrap = styled.div`
  position: relative;
  display: inline-block;
`;

export const Input = styled.input<IStyledProps>`
  width: ${({ filterSize }) => filterSize}px;
  border: none;
  border-radius: 14px;
  background-color: rgb(255, 255, 255);
  padding: 14px 18px;
  padding-right: ${({ theme }) => theme.spacing(10)};
  color: rgb(18, 20, 23);
  font-family: Roboto;
  font-size: 18px;
  font-weight: 500;
  line-height: 1.11;
  letter-spacing: 0%;
`;
