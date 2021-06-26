import styled from 'styled-components';

import bgImg from '../../../assets/bloco_services.svg';

export const Container = styled.section`
  width: 100%;
  background: url(${bgImg}) no-repeat top left;

  @media (max-width: 1133px) {
    background: url(${bgImg}) no-repeat left bottom;
    background-size: contain;
    background-position: bottom left;
    background-color: #53a547;
  }

  @media (max-width: 768px) {
    background: url(${bgImg}) no-repeat left bottom;
    background-size: 250px;
    background-position: bottom left;
    background-color: #53a547;
  }
`;

export const Content = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding: 0 11.1rem 0 2rem;
  max-width: 1230px;
  margin: 0 auto;

  @media (max-width: 1133px) {
    padding: 0 2rem 6rem 2rem;
  }

  @media (max-width: 720px) {
    padding: 0 2rem 6rem 2rem;
  }
`;

export const Description = styled.div`
  max-width: 420px;
  margin: 132px 0;

  h1 {
    font-size: 2.1rem;
    line-height: 2.68rem;
    margin-bottom: 2rem;
    color: var(--black);
  }

  p {
    line-height: 1.68rem;
    margin-bottom: 3rem;
  }

  @media (max-width: 1133px) {
    margin: 80px 0 40px 0;

    p {
      color: var(--white);
    }

    button {
      margin-left: auto;
    }
  }

  @media (max-width: 768px) {
    max-width: 450px;
    margin: 80px 0 40px 0;

    p {
      color: var(--white);
    }

    button {
      margin-left: auto;
    }
  }

  @media (max-width: 500px) {
    max-width: 100%;
    margin: 40px 0 150px 0;

    h1 {
      color: var(--black);
    }
    p {
      line-height: 1.68rem;
      color: var(--white);
    }
  }
`;
