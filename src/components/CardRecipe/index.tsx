import React from 'react';
import Button from '../Button';

import { Container, Img, Description } from './styles';

interface CardProps {
  title: string;
  img_url: string;
  url: string;
}

const Card: React.FC<CardProps> = ({ title, img_url }) => {
  return (
    <Container>
      <Img>
        <img src={img_url} alt={title} />
      </Img>
      <Description>
        <span>{title}</span>
        <Button>See Recipe</Button>
      </Description>
    </Container>
  );
};

export default Card;
