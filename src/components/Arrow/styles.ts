import styled, { css } from 'styled-components';

interface ButtonProps {
  disabled?: boolean;
  arrowType: string;
}

const arrowSide = {
  PREV: css`
    right: -100px;
  `,
  NEXT: css`
    left: -100px;
  `,
};

const arrowIcon = {
  PREV: css`
    content: '⟵';
  `,
  NEXT: css`
    content: '⟶';
  `,
};

export const Container = styled.button<ButtonProps>`
  ${props => (props.arrowType === 'PREV' ? arrowSide.PREV : arrowSide.NEXT)}
  display: flex;
  z-index: 999;
  visibility: ${props => (props.disabled ? 'hidden' : 'auto')};
  align-items: center;
  align-self: center;
  position: relative;

  &::before {
    ${props => (props.arrowType === 'PREV' ? arrowIcon.PREV : arrowIcon.NEXT)}
    background-color: white;
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.3rem;
    height: 54px;
    width: 54px;
    font-weight: bold;
    color: var(--green);
    transition: filter 0.2s;
    opacity: 0.9;
    border-radius: 50%;
  }

  &:hover {
    filter: brightness(0.9);
  }
`;
