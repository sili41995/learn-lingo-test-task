import { FC } from 'react';
import { IProps } from './Container.types';
import { Wrapper } from './Container.styled';

const Container: FC<IProps> = ({ children }) => <Wrapper>{children}</Wrapper>;

export default Container;
