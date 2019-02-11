import styled from 'styled-components'

const Button = styled.button`
  padding: 10px 70px;
  border: 0px;
  background: ${props => props.theme.cta};
  color: white;

  &:hover {
    background: ${props => props.theme.ctaHover};
    cursor: pointer;
  }
`
const InputBtn = styled.input`
  padding: 10px 70px;
  border: 0px;
  background: ${props => props.theme.cta};
  color: white;

  &:hover {
    background: ${props => props.theme.ctaHover};
    cursor: pointer;
  }
`

const GradientButton = styled(Button)`
  background: linear-gradient(to bottom right, ${props => props.theme.gradientDarkStopOne}, ${props => props.theme.gradientDarkStopTwo});
  border: 1px solid white;
  border-radius: 25px;

  &:hover {
    background: ${props => props.theme.gradientDarkStopTwo};
    border: 1px solid transparent
  }
`

export { Button, GradientButton, InputBtn }
