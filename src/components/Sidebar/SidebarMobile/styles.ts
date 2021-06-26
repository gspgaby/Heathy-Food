import styled from 'styled-components';

export const SidebarLeft = styled.div`
  display: none;
  @media (max-width: 720px) {
    min-width: 45px;
    display: flex;
    flex-direction: column;
    background-color: var(--green);
    border-right: 1px solid rgba(0, 0, 0, 0.2);
    gap: 1rem;

    ul {
      display: flex;
      flex-direction: column;
      gap: 2rem;
      li {
        a {
          padding: 1rem 0;
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: bold;
          transition: background-color 0.2s;
          font-size: 2rem;

          &:hover {
            color: var(--white);
            background-color: var(--black);
          }
        }
      }
    }
  }
`;
