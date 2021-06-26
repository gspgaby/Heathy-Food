import styled from 'styled-components';
import bgImg from '../../../assets/bloco_final_image.svg';

export const Container = styled.section`
  width: 100%;
  background: url(${bgImg}) no-repeat top right;
  background-size: 679px;

  @media (max-width: 900px) {
    background-size: 350px;
    background-position: top right;
  }

  @media (max-width: 550px) {
    background-size: 250px;
    background-position: top right;
  }
`;

export const Content = styled.div`
  padding: 250px 2rem;
  max-width: 1230px;
  margin: 0 auto;

  @media (max-width: 900px) {
    padding: 220px 2rem 40px 2rem;
  }
`;

export const Description = styled.div`
  margin-left: 50px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;

  h1 {
    font-size: 2rem;
    line-height: 4rem;
    color: var(--black);
    margin-bottom: 2rem;
  }

  form {
    display: flex;

    input {
      width: 344px;
      margin-right: 1rem;
    }
    button {
      padding: 0 2rem;
    }
  }

  @media (max-width: 720px) {
    margin-left: 0;
    form {
      input {
        width: auto;
        margin-right: 1rem;
      }
    }
  }
`;
