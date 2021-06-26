import styled from 'styled-components';

export const SidebarLeft = styled.div`
  min-width: 190px;
  display: flex;
  flex-direction: column;
  background-color: var(--green);
  border-radius: 0.25rem 0 0 0.25rem;
  border-right: 1px solid rgba(0, 0, 0, 0.2);
  padding: 1rem;
  gap: 1rem;

  h2 {
    text-align: center;
    font-size: 2rem;
    font-family: var(--text-title);
    color: var(--black);
    margin-bottom: 1rem;
  }

  ul {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    li {
      a {
        height: 2rem;
        display: flex;
        align-items: center;
        font-weight: bold;
        border-radius: 0.25rem;
        transition: background-color 0.2s;

        svg {
          margin-right: 0.5rem;
          margin-left: 1rem;
        }
        &:hover {
          color: var(--white);
          background-color: var(--black);
        }
      }
    }
  }

  @media (max-width: 720px) {
    display: none;
  }
`;
