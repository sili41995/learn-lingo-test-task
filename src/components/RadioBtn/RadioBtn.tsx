import { FC } from 'react';
import { IProps } from './RadioBtn.types';
import {
  AltElem,
  Container,
  Input,
  Marker,
  Title,
  Wrapper,
} from './RadioBtn.styled';

const RadioBtn: FC<IProps> = ({ settings, title, currentValue }) => {
  const checked = title === currentValue;

  return (
    <Container>
      <Wrapper>
        <AltElem checked={checked}>
          <Marker checked={checked}></Marker>
        </AltElem>
      </Wrapper>
      <Title>{title}</Title>
      <Input type='radio' {...settings} value={title} />
    </Container>
  );
};

export default RadioBtn;
