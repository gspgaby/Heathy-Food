import React, { useCallback, useState } from 'react';
import { Link } from 'react-router-dom';
import { GiHamburgerMenu } from 'react-icons/gi';
import MobileMenu from './MobileMenu';
import { Container, Content } from './styles';

const Navbar: React.FC = () => {
  const [mobileMenu, setMobileMenu] = useState(false);

  const OpenMobileMenu = useCallback(() => {
    setMobileMenu(oldValue => !oldValue);
  }, []);

  return (
    <Container>
      <Content>
        <a href="#home" className="logo">
          Healthy Food
        </a>

        <button className="mobileMenu" type="button" onClick={OpenMobileMenu}>
          <GiHamburgerMenu />
        </button>

        {mobileMenu && <MobileMenu openMobileMenu={OpenMobileMenu} />}
        <nav>
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
                <button type="button">REGISTER</button>
              </Link>
            </li>
          </ul>
        </nav>
      </Content>
    </Container>
  );
};

export default Navbar;
