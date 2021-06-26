import React from 'react';
import { CgProfile } from 'react-icons/cg';
import { Container, Content, MainContent, ProfileContainer } from './styles';
import Sidebar from '../../components/Sidebar';
import SidebarMobile from '../../components/Sidebar/SidebarMobile';
import { useAuth } from '../../hooks/auth';

const Profile: React.FC = () => {
  const { user } = useAuth();
  return (
    <Container>
      <Content>
        <Sidebar />
        <SidebarMobile />
        <MainContent>
          <h1>Profile </h1>
          <ProfileContainer>
            <div>
              <CgProfile size="100" />
              <p>{user.name}</p>
              <h1>My personal data</h1>
              <p>{user.email}</p>
              <p>{user.cpf}</p>
              <p>{user.id}</p>
              <h2>Adress</h2>
              <p>
                {user.street} {user.number}, {user.neighborhood}
              </p>
              <p>{user.cep}</p>
              <p>
                {user.city} | {user.state}
              </p>
            </div>
          </ProfileContainer>
        </MainContent>
      </Content>
    </Container>
  );
};

export default Profile;
