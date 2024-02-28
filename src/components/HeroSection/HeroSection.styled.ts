import styled from '@emotion/styled';

export const Section = styled.section`
  padding-bottom: ${({ theme }) => theme.padding.primarySectionPadding}px;
`;

export const Container = styled.div`
  width: ${({ theme }) =>
    theme.containerWidth.otherDesktopSize +
    theme.padding.containerPadding * 2}px;
  padding-left: ${({ theme }) => `${theme.padding.containerPadding}px`};
  padding-right: ${({ theme }) => `${theme.padding.containerPadding}px`};
  margin-left: auto;
  margin-right: auto;
`;
