import styled from '@emotion/styled';

export const Wrapper = styled.div`
  width: 100%;
  padding-left: ${({ theme }) => `${theme.padding.containerPadding}px`};
  padding-right: ${({ theme }) => `${theme.padding.containerPadding}px`};
  margin-left: auto;
  margin-right: auto;

  @media screen and (min-width: 1440px) {
    width: ${({ theme }) =>
      theme.containerWidth.primaryDesktopSize +
      theme.padding.containerPadding * 2}px;
  }
`;
