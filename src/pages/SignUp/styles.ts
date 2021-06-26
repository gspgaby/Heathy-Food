import styled from 'styled-components';
import SignInBackgroundImg from '../../assets/bloco_services.svg';

export const Container = styled.div`
  height: 100vh;
  display: flex;
  align-items: stretch;

  @media (max-width: 960px) {
    align-items: center;
    justify-content: center;
  }

  @media (max-width: 500px) {
    padding: 40px 0;
    height: auto;
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  place-content: center;
  align-items: center;
  justify-content: center;
  width: 100%;
  max-width: 700px;

  h1 {
    color: var(--blue);
    font-family: var(--text-title);
    margin-bottom: 1rem;
  }

  form {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-bottom: 1rem;

    h2 {
      color: var(--green);
      padding-bottom: 1rem;
    }

    button {
      width: 100%;
      margin: 1rem 0 0.5rem 0;
    }

    > a {
      transition: 0.2s;
      &:hover {
        color: var(--blue);
      }
    }
  }

  > a {
    transition: 0.2s;
    &:hover {
      color: var(--blue);
    }
  }
`;

export const Background = styled.div`
  flex: 1;
  background: url(${SignInBackgroundImg}) no-repeat center;
  background-size: cover;

  @media (max-width: 960px) {
    display: none;
  }
`;

export const PersonalData = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
  margin-bottom: 1rem;
  @media (max-width: 500px) {
    grid-template-columns: 1fr;
    margin-bottom: 2rem;
  }
`;
