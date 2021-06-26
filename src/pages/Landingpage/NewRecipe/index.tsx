import React from 'react';
import { AiOutlineSearch } from 'react-icons/ai';
import Button from '../../../components/Button';
import Navbar from '../../../components/Navbar';
import { Container, Content } from './styles';

const Ready: React.FC = () => {
  return (
    <Container>
      <Navbar />
      <Content>
        <h1>
          Ready for <br />
          Trying a new
          <br /> recipe?
        </h1>
        <form>
          <input
            type="text"
            name="recipe"
            id="recipe"
            placeholder="Search healthy recipes"
          />
          <Button type="button">
            <AiOutlineSearch size="22" />
          </Button>
        </form>
      </Content>
    </Container>
  );
};

export default Ready;
