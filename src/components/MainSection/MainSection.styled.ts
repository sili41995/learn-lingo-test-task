import styled from '@emotion/styled';

export const Section = styled.section`
  min-height: calc(100vh - 88px);
  padding-top: ${({ theme }) => theme.padding.secondarySectionPadding}px;
  padding-bottom: ${({ theme }) => theme.padding.secondarySectionPadding}px;
  background-color: ${({ theme }) => theme.colors.sectionColor};
`;
