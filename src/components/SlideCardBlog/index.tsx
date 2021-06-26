import React, { useEffect, useState } from 'react';
import Carousel from 'react-elastic-carousel';
import CardBlog from '../CardBlog';
import Img1 from '../../assets/Jane_Doe.jpeg';
import Img2 from '../../assets/Brian_McGregor.jpeg';
import Img3 from '../../assets/Kevin_Ibrahim.jpeg';
import Img4 from '../../assets/Mike_Jackson.jpeg';
import BlogImg1 from '../../assets/blog_image_1.svg';
import BlogImg2 from '../../assets/bloco_image_2.svg';
import BlogImg3 from '../../assets/bloco_image_3.svg';
import BlogImg4 from '../../assets/bloco_image_4.svg';
import { Container } from '../CardBlog/styles';
import { customArrow } from '../Arrow';
import useWindowDimensions from '../../hooks/useWindowDimensions';

interface CardBlogProps {
  id: string;
  title: string;
  img_url: string;
  profile_name: string;
  url: string;
  profile_url: string;
}

const posts: CardBlogProps[] = [
  {
    id: '1',
    title: 'Quick-start guide to nuts and seeds',
    img_url: BlogImg1,
    profile_name: 'Jane Doe',
    profile_url: Img1,
    url: '#url',
  },
  {
    id: '2',
    title: 'Nutrition: Tips for Improving Your Health',
    img_url: BlogImg2,
    profile_name: 'Brian McGregor',
    profile_url: Img2,
    url: '#url',
  },
  {
    id: '3',
    title: 'The top 10 benefits of eating healthy',
    img_url: BlogImg3,
    profile_name: 'Kevin Ibrahim',
    profile_url: Img3,
    url: '#url',
  },
  {
    id: '4',
    title: 'The top 10 benefits of eating healthy',
    img_url: BlogImg4,
    profile_name: 'mike jackson',
    profile_url: Img4,
    url: '#url',
  },
  {
    id: '5',
    title: 'Quick-start guide to nuts and seeds',
    img_url: BlogImg1,
    profile_name: 'Jane Doe',
    profile_url: Img1,
    url: '#url',
  },
  {
    id: '6',
    title: 'Nutrition: Tips for Improving Your Health',
    img_url: BlogImg2,
    profile_name: 'Brian McGregor',
    profile_url: Img2,
    url: '#url',
  },
];

const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 500, itemsToShow: 2 },
  { width: 700, itemsToShow: 3 },
  { width: 1200, itemsToShow: 4 },
];

const SlideCardBlog: React.FC = () => {
  const [blogPosts, setBlogPosts] = useState(posts);
  const [outerSpacing, setOuterSpacing] = useState(0);
  const [renderArrow, setRenderArrow] = useState(false);

  const { width } = useWindowDimensions();
  useEffect(() => {
    if (width > 768) {
      setOuterSpacing(100);
      setRenderArrow(true);
    }
    if (width <= 768) {
      setOuterSpacing(0);
      setRenderArrow(false);
    }
  }, [width]);

  useEffect(() => {
    setBlogPosts(posts);
  }, []);

  return (
    <Container>
      <Carousel
        className="slider"
        breakPoints={breakPoints}
        isRTL={false}
        outerSpacing={outerSpacing}
        itemPadding={[10]}
        pagination={false}
        enableMouseSwipe
        showArrows={renderArrow}
        renderArrow={customArrow}
      >
        {blogPosts &&
          blogPosts.map(
            ({ id, img_url, profile_name, profile_url, title, url }) => (
              <CardBlog
                key={id}
                title={title}
                img_url={img_url}
                profile_name={profile_name}
                url={url}
                profile_url={profile_url}
              />
            ),
          )}
      </Carousel>
    </Container>
  );
};

export default SlideCardBlog;
