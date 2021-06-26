import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
`;

export const Content = styled.div`
  max-width: 1230px;
  margin: 0 auto;
  padding: 0 2rem;
  height: 6.4rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;

  @media (max-width: 720px) {
    justify-content: center;
    margin-bottom: 1rem;
  }

  p {
    color: var(--black);
    line-height: 1.3rem;
  }

  ul {
    display: flex;
    gap: 2.4rem;

    a {
      line-height: 1.3rem;
    }
  }
`;
