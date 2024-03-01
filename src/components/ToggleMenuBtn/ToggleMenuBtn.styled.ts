import styled from '@emotion/styled';
import { IStyledProps } from './ToggleMenuBtn.types';

export const Button = styled.button<IStyledProps>`
  position: absolute;
  right: ${({ distance }) => distance}px;
  top: 50%;
  padding: 0;
  border: none;
  background-color: transparent;
  transform-origin: center;
  transform: translateY(-50%)
    ${({ showFiltersList }) => showFiltersList && 'rotate(180deg)'};
  transition: transform ${({ theme }) => theme.transitionDurationAndFunc};

  & svg {
    display: block;
    color: ${({ theme }) => theme.colors.primaryFontColor};
    transition: color ${({ theme }) => theme.transitionDurationAndFunc};
  }
`;
