import React from "react";
import styled from "styled-components";
import { media } from "../../theme/globalStyle";

const Speaker = styled.div`
  position: relative;
  ${media.tablet`overflow: hidden; height: 400px;`}

  img {
    object-fit: cover;
    width: 100%;
    height: 200px;
    ${media.tablet`
      height: 400px;
      `}
  }

  .speaker-info {
    background: white;
    ${media.tablet`
      position: absolute;
      bottom: 0;
      width: 100%;
      color: white;
      background: linear-gradient(to top, ${props =>
        props.theme.body}, rgba(255, 255, 255, 0) );

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
`;

const data = [
  {
    name: "Dr Rex Yeap",
    designation: "Vice Chairman",
    organisation: "Business Angel Network (BANSEA)",
    img:
      "https://res.cloudinary.com/gtcmain/image/upload/v1554629714/speakers/DrYeap_LBbackgd.jpg",
    description:
      '<p>Dr. Rex YEAP is a Vice Chairman of Business Angel Network (BANSEA) and he is also the co-founder of an angel investment fund (BANSEA Fund One) and serves as the Chair in its Investment Committee Board for this fund. Dr. Yeap is an Advisor in the Institute of Blockchain and also the head of Education in the Singapore Cryptocurrency and Blockchain Industry Association (ACCESS). Dr. Yeap has three decades of experience across the Information Technology value chain. He is the co-inventor of the patented IP Blockchain technology and has over <a href="http://ye.sg" target="_blank">20 Information Technology related patents</a> and thousands of inventions over the past three decades.</p>'
  },
  {
    name: "Mriganka Pattnaik",
    designation: "CEO",
    organisation: "Merkle Science",
    img:
      "https://res.cloudinary.com/gtcmain/image/upload/v1557597017/speakers/Mriganka.jpg",
    description:
      "<p>Mriganka is the CEO of Merkle Science. He has over 5+ years of experience across investment banking and technology companies. And startup experience across 3 continents.</p>"
  },
  {
    name: "Sam Gibb",
    designation: "Partner",
    organisation: "Endeavour Ventures",
    img:
      "https://res.cloudinary.com/gtcmain/image/upload/v1554629714/speakers/Sam-Gibb.jpg",
    description:
      "<p>Sam has a background in hedge funds, private equity and finance. He brings professional financial skills as well as half a decade’s experience as an angel investor in Asia. At Endeavour Ventures Sam focuses on opportunities in FinTech, Big Data/AI, E-Sports, and the crypto economy amongst other sectors. As a CFA charter holder and an active mentor at a number of local incubators including Antler, SMU, Ngee Ann Polytechnic, and StartupX amongst others, he's well versed in the local start-up eco-system.</p>"
  },
  {
    name: "Adriel Ho",
    designation: "Managing Partner",
    organisation: "Aetler",
    img:
      "https://res.cloudinary.com/gtcmain/image/upload/v1557077094/speakers/Adriel_Ho.jpg",
    description:
      "<p>Adriel is a tech entrepreneur who stands at the forefront of emerging technologies such as big data, machine learning (AI), and blockchain. He has spent the last 6 years building companies that solves impactful problems and is currently focusing on solving problems in the food system with technology. He sits as a blockchain ISO technical committee, is a blockchain instructor, as well as the managing partner at Aetler, an enterprise blockchain consultancy.</p>"
  },
  {
    name: "Alvin Chua",
    designation: "President",
    organisation: "Institute of Blockchain Singapore (IBS)",
    img:
      "https://res.cloudinary.com/gtcmain/image/upload/v1554629714/speakers/Alvin.jpg",
    description:
      "<p>Alvin is the current Founding President of Institute of Blockchain™ (IBS), a not-for-profit blockchain school focusing on blockchain & cryptocurrency education, certification and research. He is the first WSQ ACTA Master Trainer for Blockchain and has trained more than 1000 participants in blockchain & cryptocurrency at Singapore and Hong Kong. He also oversees IBS's blockchain community of more than 600 individuals across the globe.</p>"
  },

  {
    name: "Gustavor Liu",
    designation: "Co-founder",
    organisation: "Eat Launchpad",
    img:
      "https://res.cloudinary.com/gtcmain/image/upload/v1555858347/speakers/gustavo.jpg",
    description:
      "<p>Gustavo is the co-founder of The Hungry Lab and founder of EAT launchpad and a podcast host. He is a private banker with 12 years in wealth management and currently seats on the advisory board of various companies. He speaks 5 languages and has a MBA and degress in Computer Science and Mathematics. He has worked with notable brands like HSBC, UOB and Citibank.</p>"
  },
  {
    name: "Jiren Yeo",
    designation: "Director of Marketing",
    organisation: "Institute of Blockchain Singapore (IBS)",
    img:
      "https://res.cloudinary.com/gtcmain/image/upload/v1555162693/team/jiren.jpg",
    description:
      "<p>Jiren started his professional career in blockchain as a business developer for an esports dapp. In November 2018, he conducted a blockchain basics workshop for undergraduates and professionals in Dubai. Currently, he heads the marketing initiatives and a member of the curriculum committee developing a certification programme at the Institute of Blockchain®. A tech enthusiast with 8 years of cross-functional experiences across other tech verticals including enterprise software, internet voice, eCommerce and games.</p>"
  },
  {
    name: "Kenneth Hu",
    designation: "CTO",
    organisation: "Bytepay Inc",
    img:
      "https://res.cloudinary.com/gtcmain/image/upload/v1554629714/speakers/Kenneth_Hu.jpg",
    description:
      "<p>Kenneth has helmed technological teams in both Taiwan and Singapore. With his extensive technological knowledge working in big teams and corporations, such as Fuji Xerox and ST Electronics, Kenenth has garnered a wealth of knowledge and respect in the industry. Currently he is focus on promoting the use of blockchain technology as the founder and organiser of Blockchain & Dapps Technology, Singapore IOTA and Next Generation Blockchain.</p>"
  },
  {
    name: "Khoo Chaik Wah",
    designation: "Co-founder",
    organisation: "DTAL Technologies",
    img:
      "https://res.cloudinary.com/gtcmain/image/upload/v1557599539/speakers/chaik_wah.jpg",
    description:
      "<p>Chaik Wah has trained Product Owners and Team members on Agile and Lean practices and principles in both MNC and start-ups. In the last 5 years, he becomes particularly interested in Lean and Agile practices. He oversees the Scrum project management for the software delivery of the various project teams. It has helped the company to embrace iterative and incremental practices, helping teams to deliver working software more frequently.</p>"
  },
  {
    name: "Laurence Zhang",
    designation: "Director of Technology",
    organisation: "Institute of Blockchain Singapore (IBS)",
    img:
      "https://res.cloudinary.com/gtcmain/image/upload/v1555857617/speakers/Laurence-Zhang.jpg",
    description:
      "<p>Laurence is an accomplished software consultant with over 20 years of full-stack software development. Besides that he is also professionally certified for Blockchain for Business under the Linux Foundation, ACTA, and a Google Cloud & Microsoft Azure consultant. Besides actively contributing to Institute of Blockchain, he is also the ambassador of Kleros.</p>"
  },
  {
    name: "Nirmal AK",
    designation: "CTO",
    organisation: "Merkle Science",
    img:
      "https://res.cloudinary.com/gtcmain/image/upload/v1556713681/speakers/Nirmal.jpg",
    description:
      "<p>Nirmal brings over 6 years of experience in technology and fraud sciences from his times at Paypal and Instamojo. Presently, he leads technology and data science at Merkle Science and is a contributor to the open source project blockchain-etl.</p>"
  },
  {
    name: "Soh Wan Wei",
    designation: "Founder",
    organisation: "Ikiguide",
    img:
      "https://res.cloudinary.com/gtcmain/image/upload/v1554629719/speakers/Wan-Wei.jpg",
    description:
      "<p>Wan Wei is the founder of <a href='http://www.ikiguide.com' target='_blank'>IKIGUIDE: Singapore's First Mainstream Blockchain and Cryptocurrency Portal</a>. She is an open-source advocate.</p><p>She is also a media specialist who has interviewed more than 100 C-Level Executives,ex-presidents, ambassadors and entrepreneurs globally. In 2017, Wan Wei was the first and only Singaporean selected by the Prime Minister's Office to helm Finland's 100th years of independence project.</p>"
  },
  {
    name: "Yacine Terai",
    designation: "CEO, Angel Investor & Startup Advisor",
    organisation: "StartupToken",
    img:
      "https://res.cloudinary.com/gtcmain/image/upload/v1557597062/speakers/Yacine.jpg",
    description:
      "<p>Yacine is a savvy entrepreneur with 15+ years in the global technology startup space. Enriched by his sharp sense of business creation, he developed a capacity to discover cutting-edge projects. He was former VC @Coinsilium Group, the first ICAP ISDX Blockchain investment company to be publicly listed and founded StartupToken in 2017, a Blockchain Accelerator. StartupToken offers a full-service package including investment, legal and technical support, token economics and token modelling, mentorship, events organisation and growth-hacking in order for its clients to reach the necessary level of community engagement.</p>"
  }
];

const Featured = props => {
  return (
    <div className="featured-speakers pt-5 mt-5" id="featured">
      <h2 className="text-center bg-white py-5 mb-3 px-2">
        Speakers &middot; Trainers &middot; Judges &middot; Mentors
      </h2>
      <div className="row mx-0">
        {data.map((el, idx) => (
          <Speaker
            className="col-12 col-sm-6 col-lg-3 px-0 mb-5 mb-md-0"
            key={idx}
          >
            <img src={el.img} alt={el.name} />
            <div className="speaker-info py-4 px-3 text-center text-md-left">
              <h4 className="mb-0">{el.name}</h4>
              <div className="mb-0 small">{el.designation}</div>
              <div className="mb-0 small">{el.organisation}</div>
            </div>
            <div
              className="speaker-details small p-3 p-md-2"
              dangerouslySetInnerHTML={{ __html: el.description }}
            />
          </Speaker>
        ))}
      </div>
    </div>
  );
};

export default Featured;
