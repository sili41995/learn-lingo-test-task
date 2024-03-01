import styled from '@emotion/styled';
import { IStyledProps } from './FilterItem.types';

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing(2)};
`;

export const Title = styled.span`
  color: ${({ theme }) => theme.colors.titleColor};
  font-family: ${({ theme }) => theme.fontFamily.primaryFontFamily};
  font-size: ${({ theme }) => theme.fontSize.other}px;
  font-weight: ${({ theme }) => theme.fontWeight.primaryFontWeight};

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
  background-color: ${({ theme }) => theme.colors.whiteColor};
  padding: 14px 18px;
  padding-right: ${({ theme }) => theme.spacing(10)};
  color: ${({ theme }) => theme.colors.primaryFontColor};
  font-family: ${({ theme }) => theme.fontFamily.primaryFontFamily};
  font-size: ${({ theme }) => theme.fontSize.secondary}px;
  font-weight: ${({ theme }) => theme.fontWeight.primaryFontWeight};

  line-height: 1.11;
  letter-spacing: 0%;
`;
