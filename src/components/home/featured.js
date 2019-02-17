import React from 'react'
import styled from 'styled-components'
import { media } from '../../theme/globalStyle'

import Alvin from '../../images/speakers/Alvin.jpg'
import Rex from '../../images/speakers/DrYeap_LBbackgd.jpg'
import Kenneth from '../../images/speakers/Kenneth Hu.jpg'
import Laurence from '../../images/speakers/Laurence-Zhang.jpg'
import Mriganka from '../../images/speakers/Mriganka.jpg'
import Nirmal from '../../images/speakers/Nirmal.jpg'

const Speaker = styled.div`
  position: relative;
  ${media.tablet`overflow: hidden; height: 400px;`}

  img {
    object-fit: cover;
    width: 100%;
    height: 400px;
  }

  .speaker-info {
    background: white;
    ${media.tablet`
      position: absolute;
      bottom: 0;
      width: 100%;
      color: white;
      background: linear-gradient(to top, ${props => props.theme.body}, rgba(255, 255, 255, 0) );

      h4 {
        color: white;
      }
    `}
  }

  .speaker-details {
    background: white;
    ${media.tablet`
      position: absolute;
      top: 0;
      left: -100%;
      height: 100%;
      width: 100%;
      z-index: 0;
      transition: all 0.6s ease-in;
      opacity: 0.9;
      background: ${props => props.theme.primary}

      a {
        color: white;
      }

      a:hover {
        text-decoration: underline;
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
    name: 'Mriganka Pattnaik', designation: 'CEO', organisation: 'Merkle Science', img: Mriganka, description: '<p>Mriganka is the CEO of Merkle Science. He has over 5+ years of experience across investment banking and technology companies. And startup experience across 3 continents.</p>'
  },
  {
    name: 'Alvin Chua', designation: 'President', organisation: 'Institute of Blockchain Singapore (IBS)', img: Alvin, description: '<p>He is the current Founding President of Institute of Blockchain™ (IBS), a not-for-profit blockchain school focusing on blockchain & cryptocurrency education, certification and research. He is the first WSQ ACTA Master Trainer for Blockchain and has trained more than 1000 participants in blockchain & cryptocurrency at Singapore and Hong Kong. He also oversees IBS\'s blockchain community of more than 600 individuals across the globe.</p>'
  },
  {
    name: 'Kenneth Hu', designation: 'Chief Technology Officer', organisation: 'Bytepay Inc', img: Kenneth, description: '<p>Kenneth has helmed technological teams in both Taiwan and Singapore. With his extensive technological knowledge working in big teams and corporations, such as Fuji Xerox and ST Electronics, Kenenth has garnered a wealth of knowledge and respect in the industry. Currently he is focus on promoting the use of blockchain technology as the founder and organiser of Blockchain & Dapps Technology, Singapore IOTA and Next Generation Blockchain.</p>'
  },
  {
    name: 'Laurence Zhang', designation: 'Director of Technology', organisation: 'Institute of Blockchain Singapore (IBS)', img: Laurence, description: '<p>Laurence is an accomplished software consultant with over 20 years of full-stack software development. Besides that he is also professionally certified for Blockchain for Business under the Linux Foundation, ACTA, and a Google Cloud & Microsoft Azure consultant. Besides actively contributing to Institute of Blockchain, he is also the ambassador of Kleros.</p>'
  },
  {
    name: 'Nirmal AK', designation: 'CTO', organisation: 'Merkle Science', img: Nirmal, description: '<p>Nirmal is an experienced data scientist with a demonstrated history of working in the internet industry with Paypal and Instamojo. Skilled at Statistics, Python, SQL, AWS. Strong finance professional with a Bachelor of Technology (B.Tech.) from Indian Institute of Technology, Madras.</p>'
  }
]

const Featured = (props) => {


  return(
  <div className="featured-speakers pt-5 mt-5" id="featured">
    <h2 className="text-center bg-white py-5 mb-3 px-2">Speakers &middot; Trainers &middot; Judges &middot; Mentors</h2>
    <div className="row mx-0">
      {data.map((el, idx) => (
        <Speaker className="col-12 col-sm-6 col-lg-3 px-0 mb-5 mb-md-0" key={idx}>
          <img src={el.img} alt={el.name}/>
          <div className="speaker-info py-4 px-3 text-center text-md-left">
            <h4 className="mb-0">{el.name}</h4>
            <div className="mb-0 small">{el.designation}</div>
            <div className="mb-0 small">{el.organisation}</div>
          </div>
          <div className="speaker-details small p-3 p-md-2"
               dangerouslySetInnerHTML={{__html: el.description}}>
          </div>
        </Speaker>
      ))}
    </div>
  </div>
)}


export default Featured
