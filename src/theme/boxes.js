import styled from 'styled-components'
import { media } from './globalStyle'

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
  padding: 30px 10px;
  border: 5px solid ${props => props.theme.borderMute};
  ${media.tablet`padding: 30px;`}

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

const BouncingBox = styled.div`
  height: 30px;
  width: 30px;
  background: ${props => props.theme.ctaHover};
  transform: scale(0.7);
  animation: rotating 1.2s linear ${props => props.delay} infinite;

  @keyframes rotating {
  50% {
    transform: scale(1) rotate(90deg);
  }
  100% {
    transform: scale(0.8) rotate(90deg);
  }
}
`

export { Box, Panel, GradientBox, GradientBg, BouncingBox }
