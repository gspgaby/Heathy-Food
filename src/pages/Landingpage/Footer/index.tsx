import React from 'react';
import { Container, Content } from './styles';

const Footer: React.FC = () => {
  return (
    <Container>
      <Content>
        <p>© Copyrights 2019 Stack. All Rights Reserved</p>
        <ul>
          <li>
            <a href="#privacy_policy">Privacy Policy</a>
          </li>
          <li>
            <a href="#privacy_policy">Terms and Conditions</a>
          </li>
        </ul>
      </Content>
    </Container>
  );
};

export default Footer;
