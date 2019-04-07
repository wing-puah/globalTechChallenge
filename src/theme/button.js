import styled from "styled-components";
import { media } from "../theme/globalStyle";

const Button = styled.button`
  padding: 10px 40px;
  border: 0px;
  background: ${props => props.theme.cta};
  color: white;
  ${media.tablet`
    padding: 10px 70px;
  `}

  &:hover {
    background: ${props => props.theme.ctaHover};
    cursor: pointer;
  }

  &:focus {
    outline: none;
  }
`;
const InputBtn = styled.input`
  padding: 10px 20px;
  border: 0px;
  background: ${props => props.theme.cta};
  color: white;
  ${media.tablet`
    padding: 10px 70px;
  `}

  &:hover {
    background: ${props => props.theme.ctaHover};
    cursor: pointer;
  }
`;

const GradientButton = styled(Button)`
  background: linear-gradient(
    to bottom right,
    ${props => props.theme.gradientDarkStopOne},
    ${props => props.theme.gradientDarkStopTwo}
  );
  border: 1px solid white;
  border-radius: 25px;

  &:hover {
    background: ${props => props.theme.gradientDarkStopTwo};
    border: 1px solid transparent;
  }
`;

export { Button, GradientButton, InputBtn };
