import { FC } from 'react';
import { IProps } from './MainSection.types';
import { Section } from './MainSection.styled';
import Container from '@/components/Container';

const MainSection: FC<IProps> = ({ children }) => (
  <Section>
    <Container>{children}</Container>
  </Section>
);

export default MainSection;
