import { FC } from 'react';
import { Section } from './HeroSection.styled';
import { IProps } from './HeroSection.types';
import Container from '@/components/Container';

const HeroSection: FC<IProps> = ({ children }) => (
  <Section>
    <Container>{children}</Container>
  </Section>
);

export default HeroSection;
