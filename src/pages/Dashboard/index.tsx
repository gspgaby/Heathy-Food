import React from 'react';
import { useAuth } from '../../hooks/auth';
import BlogImg1 from '../../assets/blog_image_1.svg';
import BlogImg2 from '../../assets/bloco_image_2.svg';
import BlogImg3 from '../../assets/bloco_image_3.svg';
import BlogImg4 from '../../assets/bloco_image_4.svg';
import { Container, Content, MainContent, InfoList, BlogList } from './styles';
import Sidebar from '../../components/Sidebar';
import SidebarMobile from '../../components/Sidebar/SidebarMobile';

const Dashboard: React.FC = () => {
  const { user } = useAuth();
  return (
    <Container>
      <Content>
        <SidebarMobile />
        <Sidebar />
        <MainContent>
          <p>Hi {user.name}, welcome!!!</p>
          <InfoList>
            <div>
              <span>52</span>
              <p>Posts</p>
            </div>
            <div>
              <span>20</span>
              <p>Recipes</p>
            </div>
            <div>
              <span>18000</span>
              <p>Views</p>
            </div>
          </InfoList>

          <BlogList>
            <h2>Top posts</h2>
            <div>
              <div className="img">
                <img src={BlogImg1} alt="IDK" />
              </div>
              <div className="description">
                <p>Quick-start guide to nuts and seeds</p>
                <a href="post">Ver post</a>
              </div>
            </div>
            <div>
              <div className="img">
                <img src={BlogImg2} alt="IDK" />
              </div>
              <div className="description">
                <p>Nutrition: Tips for Improving Your Health</p>
                <a href="post">Ver post</a>
              </div>
            </div>
            <div>
              <div className="img">
                <img src={BlogImg3} alt="IDK" />
              </div>
              <div className="description">
                <p>The top 10 benefits of eating healthy</p>
                <a href="post">Ver post</a>
              </div>
            </div>
            <div>
              <div className="img">
                <img src={BlogImg4} alt="IDK" />
              </div>
              <div className="description">
                <p>The top 10 benefits of eating healthy</p>
                <a href="post">Ver post</a>
              </div>
            </div>
          </BlogList>
        </MainContent>
      </Content>
    </Container>
  );
};

export default Dashboard;
