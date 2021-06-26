import React from 'react';
import { Container, BlogList, Description } from './styles';
import SlideCardBlog from '../../../components/SlideCardBlog';

const Blog: React.FC = () => {
  return (
    <Container>
      <Description>
        <h1>Read Our Blog</h1>
        <p>
          Far far away, behind the word mountains, far from the countries
          <br /> Vokalia and Consonantia, there live the blind texts.
        </p>
      </Description>
      <BlogList>
        <SlideCardBlog />
      </BlogList>
    </Container>
  );
};

export default Blog;
