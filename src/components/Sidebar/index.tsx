import React from 'react';
import { AiFillHome } from 'react-icons/ai';
import { GoSignOut } from 'react-icons/go';
import { FaTools } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { SidebarLeft } from './styles';
import { useAuth } from '../../hooks/auth';

const Sidebar: React.FC = () => {
  const { signOut } = useAuth();
  return (
    <>
      <SidebarLeft>
        <h2>
          <a href="/">Healthy Food</a>
        </h2>
        <ul>
          <li>
            <a href="/">
              <AiFillHome />
              Dashboard
            </a>
          </li>
          <li>
            <Link to="profile">
              <FaTools />
              My account
            </Link>
          </li>
          <li>
            <a href="/" onClick={signOut}>
              <GoSignOut />
              Log off
            </a>
          </li>
        </ul>
      </SidebarLeft>
    </>
  );
};

export default Sidebar;
