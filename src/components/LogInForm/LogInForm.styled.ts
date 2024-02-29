import styled from '@emotion/styled';

export const Title = styled.p`
  color: rgb(18, 20, 23);
  font-family: Roboto;
  font-size: 40px;
  font-weight: 500;
  line-height: 1.2;
  letter-spacing: -2%;
`;

export const Description = styled.p`
  margin-top: ${({ theme }) => theme.spacing(5)};
  color: rgba(18, 20, 23, 0.8);
  font-family: Roboto;
  font-size: 16px;
  font-weight: 400;
  line-height: 1.38;
  letter-spacing: 0%;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing(10)};
  margin-top: ${({ theme }) => theme.spacing(10)};
`;

export const InputsList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 18px;
`;

export const ShowPasswordBtn = styled.button`
  position: absolute;
  transform: translateY(-50%);
  top: 50%;
  right: 18px;
  background-color: transparent;
  border: none;
  padding: 0;

  & svg {
    display: block;
  }
`;
