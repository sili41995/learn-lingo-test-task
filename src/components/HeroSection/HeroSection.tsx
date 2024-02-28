import { FC } from 'react';
import { Container, Section } from './HeroSection.styled';
import { IProps } from './HeroSection.types';

const HeroSection: FC<IProps> = ({ children }) => (
  <Section>
    <Container>{children}</Container>
  </Section>
);

export default HeroSection;
