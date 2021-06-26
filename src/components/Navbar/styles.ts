import styled from 'styled-components';

export const Container = styled.header`
  width: 100%;
`;

export const Content = styled.div`
  max-width: 1230px;
  padding: 0 2rem;
  height: 6.4rem;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: no-wrap;

  a.logo {
    font-family: var(--text-title);
    font-size: 2rem;
    line-height: 2.68rem;
    font-weight: bold;
    color: var(--green);
  }

  button.mobileMenu {
    display: none;
  }

  @media (max-width: 720px) {
    a.logo {
      color: var(--green);
      font-family: var(--text-title);
      font-size: 1.8rem;
      line-height: 2rem;
      font-weight: bold;
    }

    button.mobileMenu {
      display: flex;
      padding: 1rem;
      font-size: 2rem;
      color: var(--black);
      background: transparent;
    }

    nav {
      display: none;
    }
  }

  @media (max-width: 500px) {
    a.logo {
      color: var(--white);
    }

    button.mobileMenu {
      color: var(--blue);
    }
  }

  nav {
    ul {
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 30px;

      li {
        font-weight: bold;
        color: var(--white);
        line-height: 1.3rem;

        a {
          transition: filter 0.2s;

          &:hover {
            filter: brightness(0.9);
          }
        }

        button {
          font-weight: bold;
          padding: 1rem 1.87rem;
          color: var(--green);
          border-radius: 0.25rem;
          line-height: 1.3rem;
          transition: filter 0.2s;

          &:hover {
            filter: brightness(0.9);
          }
        }
      }
    }
  }
`;
