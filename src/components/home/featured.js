import React from 'react'
import styled from 'styled-components'
import { media } from '../../theme/globalStyle'

import { GradientBg } from '../../theme/boxes'
import Rex from '../../images/speakers/DrYeap_LBbackgd.jpg'
import Alvin from '../../images/speakers/Alvin.jpg'
import Laurence from '../../images/speakers/Laurence-Zhang.jpg'
import Kenneth from '../../images/speakers/Kenneth Hu.jpg'

const Speaker = styled.div`
  position: relative;
  ${media.tablet`overflow: hidden; height: 400px;`}

  img {
    object-fit: cover;
    width: 100%;
    height: 400px;
  }

  .speaker-info {
    ${media.tablet`
      position: absolute;
      bottom: 0;
      width: 100%;
    `}
  }

  .speaker-details {
    ${media.tablet`
      position: absolute;
      top: 0;
      left: -100%;
      height: 100%;
      width: 100%;
      z-index: 0;
      transition: all 0.8s ease-in;
      opacity: 0.9;
      background: ${props => props.theme.secondary}

      a {
        color: white;
      }

      a:hover {
        color: ${props => props.theme.primary}
      }
    `}
  }

  :hover .speaker-details {
    ${media.tablet`
      left: 0;
      z-index: 0;
    `}
  }
`

const data = [
  {
    name: 'Dr Rex Yeap', designation: 'Vice Chairman', organisation: 'Business Angel Network (BANSEA)', img: Rex, description: '<p>Dr. Rex YEAP is a Vice Chairman of Business Angel Network (BANSEA) and he is also the co-founder of an angel investment fund (BANSEA Fund One) and serves as the Chair in its Investment Committee Board for this fund. Dr. Yeap is an Advisor in the Institute of Blockchain and also the head of Education in the Singapore Cryptocurrency and Blockchain Industry Association (ACCESS). Dr. Yeap has three decades of experience across the Information Technology value chain. He is the co-inventor of the patented IP Blockchain technology and has over <a href="http://ye.sg" class="">20 Information Technology related patents</a> and thousands of inventions over the past three decades.</p>'
  },
  {
    name: 'Alvin Chua', designation: 'President', organisation: 'Institute of Blockchain Singapore (IBS)', img: Alvin, description: '<p>He is the current Founding President of Institute of Blockchain™ (IBS), a not-for-profit blockchain school focusing on blockchain & cryptocurrency education, certification and research. He is the first WSQ ACTA Master Trainer for Blockchain and has trained more than 1000 participants in blockchain & cryptocurrency at Singapore and Hong Kong. He also oversees IBS\'s blockchain community of more than 600 individuals across the globe.</p>'
  },
  {
    name: 'Laurence Zhang', designation: 'Director of Technology', organisation: 'Institute of Blockchain Singapore (IBS)', img: Laurence, description: '<p>Laurence is an accomplished software consultant with over 20 years of full-stack software development. Besides that he is also professionally certified for Blockchain for Business under the Linux Foundation, ACTA, and a Google Cloud & Microsoft Azure consultant. Besides actively contributing to Institute of Blockchain, he is also the ambassador of Kleros.</p>'
  },
  {
    name: 'Kenneth Hu', designation: 'Chief Technology Officer', organisation: 'Bytepay Inc', img: Kenneth, description: '<p>Kenneth has helmed technological teams in both Taiwan and Singapore. With his extensive technological knowledge working in big teams and corporations, such as Fuji Xerox and ST Electronics, Kenenth has garnered a wealth of knowledge and respect in the industry. Currently he is focus on promoting the use of blockchain technology as the founder and organiser of Blockchain & Dapps Technology, Singapore IOTA and Next Generation Blockchain.</p>'
  }
]

const Featured = (props) => {


  return(
  <div className="featured-speakers pt-5 mt-5" id="featured">
    <h2 className="text-center bg-white py-5 mb-3">Speakers, Judges and Mentors</h2>
    <div className="row mx-0">
      {data.map((el, idx) => (
        <Speaker className="col-12 col-sm-3 px-0" key={idx}>
          <img src={el.img} alt={el.name}/>
          <GradientBg className="speaker-info py-4 px-3">
            <h4 className="mb-0 text-white">{el.name}</h4>
            <div className="mb-0 small text-white">{el.designation}</div>
            <div className="mb-0 small text-white">{el.organisation}</div>
          </GradientBg>
          <div className="speaker-details small p-2"
               dangerouslySetInnerHTML={{__html: el.description}}>
          </div>
        </Speaker>
      ))}
    </div>
  </div>
)}


export default Featured
