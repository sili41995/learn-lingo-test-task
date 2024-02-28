import styled from '@emotion/styled';

export const List = styled.ul`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing(8)};
  margin-top: ${({ theme }) => theme.spacing(8)};
`;
