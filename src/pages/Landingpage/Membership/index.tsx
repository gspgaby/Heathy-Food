import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../../../components/Button';
import { Container, Content, Description } from './styles';

const Membership: React.FC = () => {
  return (
    <Container>
      <Content>
        <Description>
          <h1>
            Join our membership <br />
            to get a special offer
          </h1>
          <form>
            <input
              type="email"
              name="email"
              placeholder="Enter your email address"
            />
            <Button>
              <Link to="signin">JOIN</Link>
            </Button>
          </form>
        </Description>
      </Content>
    </Container>
  );
};

export default Membership;
