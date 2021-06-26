import React from 'react';
import { AiFillHome } from 'react-icons/ai';
import { GoGraph, GoSignOut } from 'react-icons/go';
import { FaTools } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { SidebarLeft } from './styles';
import { useAuth } from '../../../hooks/auth';

const SidebarMobile: React.FC = () => {
  const { signOut } = useAuth();
  return (
    <>
      <SidebarLeft>
        <ul>
          <li>
            <a href="/">
              <AiFillHome />
            </a>
          </li>
          <li>
            <a href="/">
              <GoGraph />
            </a>
          </li>
          <li>
            <Link to="profile">
              <FaTools />
            </Link>
          </li>
          <li>
            <a href="/" onClick={signOut}>
              <GoSignOut />
            </a>
          </li>
        </ul>
      </SidebarLeft>
    </>
  );
};

export default SidebarMobile;
