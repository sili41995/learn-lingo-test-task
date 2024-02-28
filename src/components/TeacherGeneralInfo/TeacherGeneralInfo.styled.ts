import styled from '@emotion/styled';

export const Container = styled.ul`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing(2)};
  margin-top: ${({ theme }) => theme.spacing(8)};
`;

export const InfoItem = styled.li``;

export const Info = styled.p`
  font-family: Roboto;
  color: #8a8a89;
  font-size: 16px;
  font-weight: 500;
  line-height: 1.5;
  letter-spacing: 0%;
`;

export const Languages = styled.span`
  color: #121417;
  text-decoration: underline;
`;

export const Description = styled.span`
  color: #121417;
`;
