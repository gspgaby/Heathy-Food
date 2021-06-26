import styled from 'styled-components';

export const Container = styled.section`
  padding: 2.75rem 0 6.125rem 0;
  width: 100%;
  background-color: var(--gray);
`;

export const Content = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex;
  padding: 0 2rem;
  max-width: 1230px;
  margin: 0 auto;
  flex-direction: column;
`;

export const Description = styled.div`
  text-align: center;
  padding-bottom: 2rem;
  h1 {
    font-size: 2rem;
    line-height: 4.37rem;
    color: var(--black);
  }

  p {
    line-height: 1.68rem;
  }
`;

export const RecipesList = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2.25rem;

  @media (max-width: 600px) {
    grid-template-columns: 1fr;
    gap: 1rem;
  }

  @media (max-width: 450px) {
    grid-template-columns: 1fr;
    gap: 1rem;
  }
`;
