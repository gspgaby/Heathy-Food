import styled from 'styled-components';

export const Container = styled.section`
  max-width: 100%;
  padding: 0 0 65px 0;
  background-color: var(--gray);
`;

export const Description = styled.div`
  text-align: center;
  padding-top: 2rem;
  padding-bottom: 2rem;
  h1 {
    font-size: 2rem;
    line-height: 4rem;
    color: var(--black);
  }
  p {
    line-height: 1.7rem;
  }
`;

export const BlogList = styled.div`
  display: flex;
  margin: 0 auto;
  max-width: 1680px;

  @media (max-width: 720px) {
    justify-content: flex-start;
    display: block;
  }
`;
