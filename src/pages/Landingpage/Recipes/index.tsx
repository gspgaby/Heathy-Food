import React from 'react';
import { Container, Content, Description, RecipesList } from './styles';
import Comida1 from '../../../assets/comida_1.svg';
import Comida2 from '../../../assets/comida_2.svg';
import Comida3 from '../../../assets/comida_3.svg';
import Comida4 from '../../../assets/comida_4.svg';
import Card from '../../../components/CardRecipe';

const recipes = [
  {
    id: 1,
    title: 'Broccoli Salad with Bacon',
    url: 'recipe_url',
    img_url: Comida1,
  },
  {
    id: 2,
    title: 'Classic Beef Burgers',
    url: 'recipe_url',
    img_url: Comida2,
  },
  {
    id: 3,
    title: 'Classic Potato Salad',
    url: 'recipe_url',
    img_url: Comida3,
  },
  {
    id: 4,
    title: 'Cherry Cobbler on the Grill',
    url: 'recipe_url',
    img_url: Comida4,
  },
];

const Recipes: React.FC = () => {
  return (
    <Container>
      <Content>
        <Description>
          <h1>Our Best Recipes</h1>
          <p>
            Far far away, behind the word mountains, far from the countries
            <br />
            Vokalia and Consonantia, there live the blind texts.
          </p>
        </Description>
        <RecipesList>
          {recipes.map(({ id, title, url, img_url }) => (
            <Card key={id} title={title} url={url} img_url={img_url} />
          ))}
        </RecipesList>
      </Content>
    </Container>
  );
};

export default Recipes;
