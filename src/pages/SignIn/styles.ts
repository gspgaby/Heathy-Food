import styled from 'styled-components';

import SignInBackgroundImg from '../../assets/bloco_services.svg';

export const Container = styled.div`
  height: 100vh;
  display: flex;
  align-items: stretch;

  @media (max-width: 960px) {
    justify-content: center;
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

    div {
      & + div {
        margin-top: 1rem;
      }
    }

    button {
      width: 100%;
      margin: 1rem 0 0.5rem 0;
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
