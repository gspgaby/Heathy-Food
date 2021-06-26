import styled from 'styled-components';

export const Container = styled.div`
  border-radius: 0.7rem;
  background: transparent;
  width: 528px;
  display: flex;
  flex-direction: row;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);

  @media (max-width: 1170px) {
    width: 100%;
    background-color: #fff;
    flex-direction: column;
  }

  @media (max-width: 600px) {
    width: 100%;
    height: 200px;
    flex-direction: row;
  }

  @media (max-width: 450px) {
    height: auto;
    width: 100%;
    flex-direction: column;
    border-radius: 0.7rem;
  }
`;

export const Img = styled.div`
  height: 225px;
  border-radius: 0.4rem 0 0 0.4rem;
  img {
    width: 100%;
    border-radius: 0.7rem 0.7rem 0 0;
  }

  @media (max-width: 1170px) {
    height: 100%;
    border-radius: 0 0.7rem 0 0.7rem;
    img {
      width: 100%;
      border-radius: 0 0.7rem 0 0.7rem;
    }
  }

  @media (max-width: 600px) {
    height: auto;
    border-radius: 0.7rem 0 0 0.7rem;
    img {
      width: 225px;
      border-radius: 0.7rem 0 0 0.7rem;
    }
  }

  @media (max-width: 450px) {
    height: auto;
    border-radius: 0 0.7rem 0 0.7rem;
    img {
      border-radius: 0 0.7rem 0 0.7rem;
      width: 100%;
    }
  }
`;

export const Description = styled.div`
  width: 275px;
  height: 225px;
  border-radius: 0.7rem;
  background-color: #fff;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 1rem;
  padding: 0 2rem;

  span {
    font-family: var(--text-title);
    color: var(--black);
    font-weight: bold;
    font-size: 1.5rem;
    line-height: 2.1rem;
  }

  button {
    width: 134px;
  }
  @media (max-width: 1170px) {
    height: 100%;
    padding: 1.5rem 2rem;
    width: 100%;
  }

  @media (max-width: 600px) {
    height: auto;
  }
  @media (max-width: 450px) {
    height: auto;
    width: auto;
  }
`;
