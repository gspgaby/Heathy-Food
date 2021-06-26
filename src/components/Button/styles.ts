import styled from 'styled-components';

export const Container = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;

  height: 3.25rem;
  padding: 0 1rem;
  border-radius: 0.25rem;
  background: var(--green);
  color: var(--white);
  font-size: 1rem;
  transition: filter 0.2s;

  &:hover {
    filter: brightness(0.9);
  }
`;
