import React from 'react';
import { Container, Img, Description, CardItem } from './styles';

interface CardProps {
  title: string;
  img_url: string;
  url: string;
  profile_url: string;
  profile_name: string;
}

const CardBlog: React.FC<CardProps> = ({
  title,
  img_url,
  profile_url,
  profile_name,
}) => {
  return (
    <Container>
      <CardItem>
        <Img>
          <img src={img_url} alt={title} />
        </Img>
        <Description>
          <h2>{title}</h2>
          <div>
            <a href="person">
              <img src={profile_url} alt={profile_name} />
              <span>{profile_name}</span>
            </a>
          </div>
        </Description>
      </CardItem>
    </Container>
  );
};

export default CardBlog;
