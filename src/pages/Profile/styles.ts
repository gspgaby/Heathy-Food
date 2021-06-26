import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  background-image: linear-gradient(120deg, #d4fc79 0%, #96e6a1 100%);
`;

export const Content = styled.div`
  background: #fff;
  color: var(--blue);
  width: 900px;
  height: 650px;
  margin: auto auto;
  border-radius: 1rem;
  display: flex;
  justify-content: space-between;

  @media (max-width: 720px) {
    height: 100vh;
    border-radius: 0;
    width: 100%;
  }
`;

export const MainContent = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 2rem;

  p {
    font-size: 1.5rem;
  }

  @media (max-width: 720px) {
    height: 100%;
    width: 100%;
  }

  @media (max-width: 400px) {
    height: 100%;
    width: 330px;
  }
`;

export const ProfileContainer = styled.div`
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  h1 {
    margin-bottom: 1rem;
  }

  h2 {
    margin: 1rem 2rem 1rem 1rem;
  }
`;
