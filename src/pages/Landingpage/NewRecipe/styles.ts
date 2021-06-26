import styled from 'styled-components';
import bgImg from '../../../assets/Illustration.svg';

export const Container = styled.section`
  width: 100%;
  background: url(${bgImg}) no-repeat top right;
  background-size: 1100px;
  padding-bottom: 25px;

  @media (max-width: 1200px) {
    background-size: 75%;
  }

  @media (max-width: 720px) {
    background-position: top right;
    background-size: 50%;
    background-color: var(--white);
  }

  @media (max-width: 500px) {
    background-position: bottom;
    background-size: 100%;
    background-color: #83ca62;
  }

  @media (max-width: 400px) {
    background-position: bottom;
    background-size: 100%;
    background-color: #83ca62;
  }
`;

export const Content = styled.div`
  padding: 190px 2rem;
  max-width: 1230px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;

  h1 {
    color: var(--black);
    font-size: 3rem;
    line-height: 4.375rem;
    margin-bottom: 32px;
  }

  form {
    display: flex;
    gap: 1rem;
    input {
      width: 343px;
    }
  }

  @media (max-width: 720px) {
    padding: 5rem 2rem 5rem 2rem;

    h1 {
      color: var(--black);
    }
    form {
      display: flex;
      gap: 1rem;
      button {
        max-width: 120px;
        width: 100%;
      }
      input {
        width: 200px;
      }
    }
  }

  @media (max-width: 500px) {
    padding: 30px 2rem 320px 2rem;
  }
`;
