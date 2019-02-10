import styled from 'styled-components'

const Panel = styled.div`
  padding: 40px 20px;
  @media(min-width: 568px) {
    padding: 80px 40px;
  }

  .row {
    margin: 0;
  }
`

const Box = styled.div`
  border: 5px solid ${props => props.theme.borderMute};
  padding: 30px;

  ul {
    list-style-type: none;
    padding-left: 0;
    margin-bottom: 0;
  }

  i {
    color: ${props => props.theme.mute}
  }

  ul li:not(:last-child) {
    padding-bottom: 20px;
  }
`

const GradientBox = styled(Box)`
  border-image: linear-gradient(to bottom right, ${props => props.theme.gradientStopOne} 0%, ${props => props.theme.gradientStopTwo} 100%);
  border-image-slice: 1;
`

const GradientBg = styled.div`
  background: linear-gradient(to top, ${props => props.theme.body}, rgba(255, 255, 255, 0) )
`

export { Box, Panel, GradientBox, GradientBg }
