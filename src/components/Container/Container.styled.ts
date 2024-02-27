import styled from '@emotion/styled';

export const Wrapper = styled.div`
  width: ${({ theme }) =>
    theme.containerWidth.desktop + theme.padding.containerPadding * 2}px;
  padding-left: ${({ theme }) => `${theme.padding.containerPadding}px`};
  padding-right: ${({ theme }) => `${theme.padding.containerPadding}px`};
  margin-left: auto;
  margin-right: auto;
`;
