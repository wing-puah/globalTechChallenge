import styled from "styled-components";
import { media } from "./globalStyle";

const Panel = styled.div`
  padding: 40px 20px;
  @media (min-width: 568px) {
    padding: 80px 40px;
  }

  .row {
    margin: 0;
  }

  .phoneMT {
    margin-top: 80px;
    ${media.tablet`margin-top: 0px;`}
  }
`;

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
    color: ${props => props.theme.mute};
  }

  ul li:not(:last-child) {
    padding-bottom: 20px;
  }
`;

const GradientBox = styled(Box)`
  border-image: linear-gradient(
    to bottom right,
    ${props => props.theme.gradientStopOne} 0%,
    ${props => props.theme.gradientStopTwo} 100%
  );
  border-image-slice: 1;
`;

const GradientBg = styled.div`
  background: linear-gradient(
    to top,
    ${props => props.theme.body},
    rgba(255, 255, 255, 0)
  );
`;

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
`;

const OddShape = styled.div`
  min-height: 115px;
  position: relative;
  background-color: papayaWhip;
  border-radius: 20px;
  box-shadow: 10px 0px #ccc;
  float: left;
  padding: 20px 10px 10px;
  z-index: 1;
  ${media.tablet`padding: 20px 40px 10px;`}

  &:before {
    content: "";
    position: absolute;
    top: -15px;
    left: 0;
    right: 0;
    margin: auto;
    height: 75px;
    width: 100%;
    border-top-right-radius: 20px;
    border-top-left-radius: 20px;
    border-bottom-right-radius: 15px;
    border-bottom-left-radius: 15px;
    background-color: papayaWhip;
    transform: rotate(-2deg) skew(-2deg);
    z-index: 0;
  }

  &:after {
    content: "";
    position: absolute;
    bottom: -42px;
    left: 0;
    right: 0;
    margin: auto;
    height: 110px;
    width: 100%;
    border-bottom-right-radius: 20px;
    border-bottom-left-radius: 20px;
    background-color: papayaWhip;
    box-shadow: 10px 10px 0 #ccc;
    transform: rotate(6deg) skew(6deg) scaleX(1.005);
    z-index: 0;
  }

  .oddShape__content {
    position: relative;
    z-index: 5;

    p:last-child {
      padding-bottom: 0;
    }
  }
`;

export { Box, Panel, GradientBox, GradientBg, BouncingBox, OddShape };
