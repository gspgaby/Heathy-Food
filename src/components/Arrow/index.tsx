import React, { ButtonHTMLAttributes } from 'react';
import { RenderArrowProps } from 'react-elastic-carousel';
import { Container } from './styles';

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  arrowType: string;
};

const Arrow: React.FC<ButtonProps> = ({ children, arrowType, ...rest }) => {
  return (
    <Container type="button" arrowType={arrowType} {...rest}>
      {children}
    </Container>
  );
};

export default Arrow;

export const customArrow = ({
  type,
  onClick,
  isEdge,
}: RenderArrowProps): JSX.Element => {
  return <Arrow onClick={onClick} arrowType={type} disabled={isEdge} />;
};
