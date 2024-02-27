import GeneralInfo from '@/components/GeneralInfo';
import HeroSection from '@/components/HeroSection';
import { FC } from 'react';

const HomePage: FC = () => {
  return (
    <HeroSection>
      <GeneralInfo />
    </HeroSection>
  );
};

export default HomePage;
