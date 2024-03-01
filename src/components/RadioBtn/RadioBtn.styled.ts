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
  border-color: ${({ checked, theme }) =>
    checked ? theme.colors.primaryColor : theme.colors.otherColor};
  border-radius: 50%;
`;

export const Marker = styled.span<IStyledProps>`
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background-color: ${({ checked, theme }) =>
    checked ? theme.colors.primaryColor : 'transparent'};
`;

export const Title = styled.span`
  color: ${({ theme }) => theme.colors.primaryFontColor};
  font-family: ${({ theme }) => theme.fontFamily.primaryFontFamily};
  font-size: ${({ theme }) => theme.fontSize.primary}px;

  font-weight: ${({ theme }) => theme.fontWeight.secondaryFontWeight};

  line-height: 1.38;
  letter-spacing: 0%;
`;

export const Input = styled.input`
  position: absolute;
  transform: scale(0);
`;
