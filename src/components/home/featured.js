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
    name: "Clément Lesaege",
    designation: "CTO",
    organisation: "Kleros",
    img:
      "https://res.cloudinary.com/gtcmain/image/upload/v1558755696/speakers/clement.jpg",
    description:
      "<p>Clément is an engineer graduated from UTC (France) and he holds a Master of Computer Science from Georgia Tech (USA), Clément is the CTO of KLEROSand as such, he is at the origin of the developed protocol infrastructure. Clément is one of the French specialists in smart contract security.</p><p>He works on the theoretical aspects (incentive mechanisms, attacks and defense mechanisms) and experimental (traditional metrics of machine learning applied to the human sciences) of crypto-economics (computer science, cryptography, game theory) at KLEROS.</p>"
  },
  {
    name: "Lawrence Lim",
    designation: "Head of Business Development",
    organisation: "IOST",
    img:
      "https://res.cloudinary.com/gtcmain/image/upload/v1558368421/speakers/lawrence.jpg",
    description:
      "<p>Lawrence oversees international growth for IOST, a global top 50 blockchain protocol backed by Sequioa Capital, ZhenFund and multiple institutional investors. Prior to IOST, he was responsible for new business acquisition at TradeGecko with a successful track record of winning new clients across Asia Pacific, EMEA and the Americas. Prior to TradeGecko, Lawrence was with JP Morgan, BNP Paribas and KPMG across investment banking and asset management functions. Lawrence holds a Bachelor of Business (First Class Honours) from Nanyang Technological University.</p>"
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
    name: "Ankur Daharwal",
    designation: "Blockchain Consultant",
    organisation: "Zuellig Pharma",
    img:
      "https://res.cloudinary.com/gtcmain/image/upload/v1559865007/speakers/Ankur.jpg",
    description:
      "<p>Ankur Daharwal started his journey into blockchain with IBM Blockchain Garage in 2016. As a technology enthusiast and expert in both public and enterprise blockchains, he has been part of the decentralized world for around 3 years now. He has devoted his career to devising real-life solutions for asset management and value exchange in a plethora of industry use cases worldwide. Ankur strongly believes in fulfilling social responsibilities and supporting humanitarian causes with the use of his skills in technology.</p>"
  },
  {
    name: "Anna Wang",
    designation: "Regional Manager China",
    organisation: "Origin Protocol",
    img:
      "https://res.cloudinary.com/gtcmain/image/upload/v1557933032/speakers/photo6262751681750083789.jpg",
    description:
      "<p>Anna is the Regional Manager for China at Origin Protocol. An experienced marketer, she has worked across various industries and executed global campaign programs for companies such as Billabong, HP, P&G and Exness.</p>"
  },
  {
    name: "Clare Markham",
    designation: "COO",
    organisation: "Startup Token",
    img:
      "https://res.cloudinary.com/gtcmain/image/upload/v1559749022/speakers/clare.jpg",
    description:
      "<p>Clare is the Co-Founder and COO of StartupToken Blockchain Accelerator with 15+ years cumulative international experience in Consulting for Innovative Strategy, Community Building and Operations. Leader of Women in Blockchain International Networks, Women4Blockchain Hackathon Business mentor, keynote speaker for InCredibles Accelerator in Warsaw, Poland and guest lecturer on Blockchain Technology at ESSEC Global MBA in Singapore. </p>"
  },
  {
    name: "Daniel Shen",
    designation: "Founder",
    organisation: "Soqqle",
    img:
      "https://res.cloudinary.com/gtcmain/image/upload/v1559748934/speakers/daniel.jpg",
    description:
      "<p>Daniel Shen has more than 10 years of experience in investment banking & Fintech. Well-versed in process re-engineering, innovation, human capital, he dived into Blockchain POC in J.P. Morgan. With product management expertise, he is the founder of Soqqle – a gamified learning platform to bring serious games into the classroom. He is working with local mainstream schools in Singapore to gamify curriculum and join a wider eco-system on the Blockchain</p>"
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
    name: "Leonard Tan",
    designation: "Co-founder",
    organisation: "Torus",
    img:
      "https://res.cloudinary.com/gtcmain/image/upload/v1559259037/speakers/Leonard.jpg",
    description:
      "<p>Previously at Visa and ConsenSys, Leonard is a software engineer with several years of experience in blockchain technology and research. He has built a secure mobile cryptowallet for CoinHako as well as full-stack Ethereum dapps, and has been a technical advisor for multiple ICOs. A member of Ethereum Foundation working on ENS, he has been invited to present at blockchain events across the world in the US (ETHDenver), Singapore, UAE (ICANN60), as well as Ghana (Ghana Blockchain Conference). He is currently the co-founder of Torus, a decentralised credibility solution for the internet.</p>"
  },

  {
    name: "Lisa Tan",
    designation: "Token Economics Research",
    organisation: "Economics Design",
    img:
      "https://res.cloudinary.com/gtcmain/image/upload/v1558752716/speakers/lisa.jpg",
    description:
      "<p> Lisa is a deconstructor of economics, cryptoassets and cryptosystems.  She comes from an economics background and sees huge potential to bridge the gap between traditional economics and the blockchain world.</p><p>Lisa now pours her passion for economics into designing, teaching and showcasing the true capabilities of solid underlying economic and incentivisation models to build scalable and sustainable token economy and networks</p>"
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
    name: "Chan Rong Yao",
    // designation: "CTO",
    organisation: "Arete",
    img:
      "https://res.cloudinary.com/gtcmain/image/upload/v1559749063/speakers/Rong-yao.jpg",
    description:
      "<p>Rong Yao is Managing Partner of Arete Advisory, A firm focused on excellence and scaling your business. He has a decade of experience in helping firms.</p>"
  },
  {
    name: "Ryan Soh",
    designation: "CEO & Founder",
    organisation: "Edufied",
    img:
      "https://res.cloudinary.com/gtcmain/image/upload/v1558752939/speakers/Ryan.jpg",
    description:
      "<p>Ryan is a Business Strategist in the Education Management industry. Being an experienced entrepreneur for more than 16 years, he spent most of his journey focusing on Education related ventures. With his interest in the fast moving technology sector, Ryan rolled out a digital transformation framework for MoneyTree, a Financial Literacy Education Institution for Kids Youths aged 6 to 17.<p>Ryan is the founder of Edufied, a blockchain based Credential Storage Verification System. Within a span of 10 months, he has brought Edufied from an idea to main net launch with a ready pool of 40 000 committed users.</p>"
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
  },
  {
    name: "Zhen Yu",
    designation: "Cofounder",
    organisation: "Torus",
    img:
      "https://res.cloudinary.com/gtcmain/image/upload/v1559259037/speakers/Zhen_Yu.jpg",
    description:
      "<p>Prior to Torus, Zhen was a researcher with a focus on scalability and state channels. He led Peace Bridge funded by both the Ethereum Foundation and ETC Cooporative and has been a technical advisor for multiple ICOs. He also has a background in software engineering at Visa and Accenture.</p>"
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
