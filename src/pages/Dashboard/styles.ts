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
  color: var(--black);
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
    width: 330px;
  }
`;

export const InfoList = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  margin: 1rem 0;
  gap: 1rem;

  div {
    display: flex;
    flex-direction: column;
    background: var(--green);
    border-radius: 0.25rem;
    padding: 1rem;
    span {
      font-size: 2rem;
      text-align: center;
    }

    p {
      font-size: 1rem;
      text-align: center;
    }
  }
`;

export const BlogList = styled.div`
  h2 {
    margin-bottom: 0.5rem;
  }
  > div {
    border: 1px solid var(--green);
    border-radius: 0.25rem;
    display: flex;
    .img {
      width: 100px;
    }
    img {
      width: 100%;
      height: 100%;
      border-radius: 0.25rem;
    }

    div.description {
      display: flex;
      flex-direction: column;
      justify-content: center;
      padding: 0 1rem;
      p {
        font-size: 1rem;
        font-weight: bold;
      }

      a {
        font-weight: bold;
        &:hover {
          text-decoration: underline;
        }
      }
    }

    & + div {
      margin-top: 1rem;
    }
  }
`;
