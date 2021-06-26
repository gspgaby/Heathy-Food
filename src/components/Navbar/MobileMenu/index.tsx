import React from 'react';
import { GrFormClose } from 'react-icons/gr';
import { Link } from 'react-router-dom';
import Button from '../../Button';
import { Container, ModalMenu } from './styles';

interface MobileMenuProps {
  openMobileMenu(): void;
}

const MobileMenu: React.FC<MobileMenuProps> = ({ openMobileMenu }) => {
  return (
    <Container>
      <ModalMenu>
        <span className="logoMenu">
          <a href="#recipes">HEALTHY FOODS </a>
        </span>
        <ul>
          <li>
            <a href="#recipes">HEALTHY RECIPES</a>
          </li>
          <li>
            <a href="#blog">BLOG</a>
          </li>
          <li>
            <Link to="signin">JOIN</Link>
          </li>
          <li>
            <Link to="signup">
              <Button type="button">REGISTER</Button>
            </Link>
          </li>
        </ul>
        <button className="closeMenu" type="button" onClick={openMobileMenu}>
          <GrFormClose />
        </button>
      </ModalMenu>
    </Container>
  );
};

export default MobileMenu;
