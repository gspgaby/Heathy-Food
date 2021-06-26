import styled from 'styled-components';

export const Container = styled.div`
  display: none;
  @media (max-width: 720px) {
    display: flex;
    background-color: rgba(0, 0, 0, 0.6);
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
  }
`;

export const ModalMenu = styled.div`
  @media (max-width: 720px) {
    border-top-left-radius: 1rem;
    margin-left: auto;
    display: flex;
    background-color: #fff;
    color: #23272a;
    width: 65vw;
    height: 100vh;
    flex-direction: column;
    padding: 2rem 4rem 0 2rem;
    position: relative;

    span.logoMenu {
      font-size: 1.3rem;
      font-family: var(--text-title);
      font-weight: bold;
      color: var(--black);

      &::after {
        content: '';
        display: inline-block;
        width: 100%;
        height: 1px;
        background-color: rgba(0, 0, 0, 0.1);
        margin-top: 1rem;
      }
    }

    ul {
      display: flex;
      flex-direction: column;

      li {
        font-size: 1.1rem;
        & + li {
          margin-top: 0.5rem;
        }

        a {
          padding: 0.5rem;
          display: block;
          width: 100%;
          &:hover {
            text-decoration: underline;
          }
        }

        button {
          padding: 0.5rem;
          display: block;
          width: 100%;
          font-weight: bold;
        }
      }
    }

    button.closeMenu {
      display: block;
      position: absolute;
      font-size: 2rem;
      top: 1.5rem;
      right: 1.5rem;
      padding: 0.5rem;
      background: transparent;
    }
  }
`;
