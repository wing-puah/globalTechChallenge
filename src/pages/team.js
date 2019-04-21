import React from "react";
import { StaticQuery, graphql } from "gatsby";
import { media } from "../theme/globalStyle";
import styled from "styled-components";
import Layout from "../components/layout";
import SEO from "../components/seo";

const teamData = [
  {
    name: "Wing Puah",
    designation: "Founder",
    img: "/image/upload/v1555160988/team/wing.png",
    description:
      "<p>Upon graduation, Wing set off for a 6 months working holiday in New Zealand, in hope to find the meaning of life. Being young and hopeful, Wing want to find out how Wing could make the world a better place.</p><p>Experienced in events and project coordination, Wing has organised events for all walks of life from kids to elderly, from 10 pax to 400 pax. She is also the co-chair of GCNS youth forum’18 which is powered by NYC and young NTUC.</p><p>After almost a decade of experience from working in the zoo, performing as a belly dancer, working as soft-skills trainer and sports coach, a start-up founder, she discovers that what she want to do is to be involved in the tech industry.</p><p>Within 2 year of setting her goals, she landed her first paying web-development client, helped non-profits to establish their event websites, spoke at a few places: SMU, Wordpress Singapore, Junior Dev, and got a full time tech role. Follow her journey at <a href='www.thegeekwing.com' target='_blank'>The Geek Wing</a></p>"
  },
  {
    name: "Soh Wan Wei",
    designation: "Co-founder",
    img: "/image/upload/v1554629719/speakers/Wan-Wei.jpg",
    description:
      "<p>Wan Wei is the founder of <a href='http://www.ikiguide.com' target='_blank'>IKIGUIDE: Singapore's First Mainstream Blockchain and Cryptocurrency Portal</a>. She is an open-source advocate.</p><p>She is also a media specialist who has interviewed more than 100 C-Level Executives,ex-presidents, ambassadors and entrepreneurs globally. In 2017, Wan Wei was the first and only Singaporean selected by the Prime Minister's Office to helm Finland's 100th years of independence project.</p>"
  },
  {
    name: "Ian Chan",
    designation: "CFO",
    img: "/image/upload/v1555143093/team/ian-chan.jpg",
    description:
      "<p>Ian Chan is a tech solution leader who design, create, strategize and produce many products, applications, software and business solutions. He has worked with many thought leaders to bring their ideas and platforms to life. His solution extends to many sectors and topics including: Financial, Manufacturing, Logistics, Commerce, Retail, Hospitality, Telecom, Banking, Public Sector, Identity & Security, Data Warehouse and Analytics.</p><p>With 28 years' experience in getting Technology and Operation to work harmoniously, he has an extensive career in providing technology solution. Ian self-learn Blockchain in 2014. He had setup a couple CryptoMining farms, and had advised a few projects and had infused Blockchain into technology solution. Today, Ian is a Blockchain and CryptoMining enthusiast; and a keen advocator on this technology. He has shared many knowledge and idea on Blockchain and CryptoMining in meetings, seminars and forums.</p><p>He was also interviewed by Channel News Asia & BBC Radio on the same topics. IAN had studied at the Victoria University in Australia and earned a Master degree in Professional Accounting. He is a Certified Public Accountant and also a Certified Information Systems Auditor. IAN prefers traveling and reading during his free time.</p>"
  },
  {
    name: "Wong Zi Hui",
    designation: "Head Of Operations",
    img: "/image/upload/v1555142881/team/zihui.jpg",
    description:
      "<p>Zi Hui is an experienced Day Trader with a demonstrated history of working in the banking industry. Skilled in Transfer Pricing, Microsoft Word, Banking, Public Speaking, and Market Research. Strong finance professional with a Bachelor’s Degree focused in Banking and Financial Support Services from Monash University.</p>"
  },
  {
    name: "Alvin Chua",
    designation: "",
    img: "/image/upload/v1554629714/speakers/Alvin.jpg",
    description:
      "<p>Mr Alvin Chua has a total working experience of 13 years, he is a former civil servant with the Ministry of Defence, Singapore for 10 years (with three years stint in Taiwan). He has over eight years of personal investment experience and three years of experience in corporate training, blockchain and cryptocurrency.</p><p>He is the current Founding President of Institute of Blockchain® (IBS), a not-for-profit blockchain school focusing on blockchain & cryptocurrency education, certification and research. He is a Certified WSQ ACTA Trainer and Design Thinking Coach and has trained more than 1000 participants in blockchain & cryptocurrency at Singapore and Hong Kong.</p><p>He also oversees IBS's blockchain community of more than 600 individuals across the globe. In 2018, he made it to the Singapore Fintech Champions List published by Lightbulb Capital and won the Golden Block Awards' Best Blockchain CEO (Male).</p><p>He is involved in more than 20 blockchain & cryptocurrency events across Asia, speaking & sharing about blockchain & cryptocurrency. Including SUSS's Global Inclusive Blockchain Conference, Numoney's Blockchain & ICO Seminar, Ninecoin (Hong Kong)'s Opening Ceremony, Fern Software's User Group Meeting 2018, Livesone’s World Conference, Bcoin's Securing Your Digital Assets Seminar, GMGC's World Blockchain Conference, Singapore Customs's Talk, Malaysia Blockchain Association’s Bloconomic 2018 (KL), Changi-Simei Community Club's Community Learning Day 2018, SAFRA Entrepreneurship Club's Blockchain Seminar, SAFRA Tech Club & DIFY’s Unchained, Singapore Polytechnic’s Blockchain & Cryptocurrency Talk, UCIM and World Blockchain Summit. He moderated the panel discussions in Indonesia Blockchain Association’s xBlockchain 2018 (Bali), Block Asia's Blockchain Innovation Tour & BCoin's Token Economies in Korea. He also served as a Judge during the Citi-SMU Financial Literacy Challenge 2018 Theme: Cryptocurrency.</p>"
  },
  {
    name: "Leslie Daniel Chan",
    img: "/image/upload/v1555142880/team/leslie.jpg",
    description:
      "<p>Leslie presently serves as the Vice President of Singapore Bitcoin Club; Singapore's largest cryptocurrency trading educational community that was established in 2015 to promote financial literacy in crypto assets and practical fundamental & technical analysis education for consumers. He is currently lobbying to expand the ranks of the team in Singapore Bitcoin Club through its ambassador program.</p><p>Leslie is a frequent speaker, panelist, moderator on seminars and exhibitions on cryptocurrencies and blockchain related events where he shares his personal views on the uses of cryptocurrencies from a business & individual perspective. Leslie takes it upon himself to educate anyone who wants to know more about blockchain technologies and cryptocurrencies.</p>"
  },
  {
    name: "Kenneth Hu",
    designation: "",
    img: "/image/upload/v1554629714/speakers/Kenneth_Hu.jpg",
    description:
      "<p>Kenneth has helmed technological teams in both Taiwan and Singapore. With his extensive technological knowledge working in big teams and corporations, such as Fuji Xerox and ST Electronics, Kenenth has garnered a wealth of knowledge and respect in the industry. Currently he is focus on promoting the use of blockchain technology as the founder and organiser of Blockchain & Dapps Technology, Singapore IOTA and Next Generation Blockchain.</p>"
  },
  {
    name: "Laurence Zhang",
    designation: "",
    img: "/image/upload/v1555857617/speakers/Laurence-Zhang.jpg",
    description:
      "<p>Laurence is an accomplished software consultant with over 20 years of full-stack software development. Besides that he is also professionally certified for Blockchain for Business under the Linux Foundation, ACTA, and a Google Cloud & Microsoft Azure consultant. Besides actively contributing to Institute of Blockchain, he is also the ambassador of Kleros.</p>"
  },
  {
    name: "Ian Lee",
    designation: "",
    img: "/image/upload/v1555142881/team/ian.jpg",
    description:
      "<p>Advocating improvement in the blockchain space through education and appropriate regulation/best practices. Ian's goal is to help develop appropriate and fair best practices thereby allowing equal investment opportunities to accredited and non-accredited investors alike and to filter out the bad projects so that capital can be better channelled towards the pursuit of technological advancement (and social good).</p><p>Firm believer in giving back to the community. Participated in service projects in various regions of the People's Republic of China, Singapore, Africa and Alaska. Working to bring attention to the lack of effort towards ESG/CSR in the blockchain community.</p>"
  },
  {
    name: "R Singaram",
    designation: "",
    img: "/image/upload/v1555142881/team/singaram.jpg",
    description:
      "<p>Singaram is a happy-go-lucky person who sees life as a bed of flowers provided that one takes hold of all the opportunities available. He hopes to make the most of these opportunities. He is thrilled to be a part of the National Blockchain Challenge to stir interest in the blockchain among the community."
  },
  {
    name: "Bill Chan",
    designation: "",
    img: "/image/upload/v1555142881/team/Bill.jpg",
    description:
      "<p>Bill is constantly learning, improving, and evolving when engaging people, gaining industry experience, and exploring disruptive technology at Tech Conventions (e.g Fintech Festival and Tech in Asia). He is a firm believer in the Blockchain & Cryptocurrency space. He wants to educate the public about the phenomenon technology that is revolutionizing in every sectors (e.g Finance, Supply Chain, Healthcare, Technology, Legal, and Government). To demonstrate the application to solve real-world problems. All in all, he loves to teach.</p>"
  },
  {
    name: "Jiren Yeo",
    designation: "",
    img: "/image/upload/v1555162693/team/jiren.jpg",
    description:
      "<p>Jiren started his professional career in blockchain as a business developer for an esports dapp. In November 2018, he conducted a blockchain basics workshop for undergraduates and professionals in Dubai. Currently, he heads the marketing initiatives and a member of the curriculum committee developing a certification programme at the Institute of Blockchain®.</p><p>A tech enthusiast with 8 years of cross-functional experiences across other tech verticals including enterprise software, internet voice, eCommerce and games. He holds a BSc degree in Information Management by University College Dublin.</p>"
  }
];

const TeamProfile = styled.div`
  .team {
    .close {
      position: absolute;
      right: 10px;
    }

    .modal-body {
      p:last-child {
        padding-bottom: 0;
      }
    }
  }

  ${media.tablet`
    .team-img__container{
      position: relative;
      height: 250px;
      margin-bottom: 50px;

      &:hover {
        cursor: pointer;

        .team-name {
          color: white;
          text-shadow: #222 0px 0px 5px, #222 0px 0px 10px, #222 0px 0px 15px, #222 0px 0px 20px, #222 0px 0px 30px, #222 0px 0px 40px, #222 0px 0px 50px, #222 0px 0px 75px;
        }

        .img__clip {
          border-radius: 15px;
          border: 0;
          height: 100%;

          img {
            filter: opacity(80%);
          }
        }
      }
    }

    .img__clip {
      position: relative;
      border-radius: 50%;
      overflow: hidden;
      height: 200px;
      width: 200px;
      border: 1px solid ${props => props.theme.mute};
    }

    img {
      min-height: 250px;
      min-width: 200px;
      object-fit: cover;
    }

    .team-name {
      position: absolute;
      top: 210px;
      width: 100%;
    }
  `}
`;

const Team = () => (
  <StaticQuery
    query={graphql`
      query {
        site {
          siteMetadata {
            imgCDN
          }
        }
      }
    `}
    render={data => (
      <Layout>
        <SEO title="Team" />
        <div className="container__cstm team my-3">
          <div className="bg-white p-5">
            <h1 className="text-center text--brand">Meet the team</h1>
            <div className="row">
              {teamData.map((el, idx) => (
                <TeamProfile key={idx} className="col-sm-3">
                  <div
                    className="team-img__container text-center"
                    id={`team-${idx}`}
                    data-toggle="modal"
                    data-target={`#team-content-${idx}`}
                  >
                    <div className="img__clip mx-auto">
                      <img
                        src={`${data.site.siteMetadata.imgCDN}${el.img}`}
                        alt={el.name}
                      />
                    </div>
                    <h4 className="text-center team-name mt-3 mt-sm-0">
                      {el.name}
                    </h4>
                  </div>

                  <div
                    className="team modal fade"
                    id={`team-content-${idx}`}
                    role="dialog"
                    tabIndex="-1"
                    aria-labelledby="teamModal"
                    aria-hidden="true"
                  >
                    <div className="modal-dialog" role="document">
                      <div className="modal-content p-3">
                        <button
                          type="button"
                          className="close"
                          data-dismiss="modal"
                          aria-label="Close"
                        >
                          <span aria-hidden="true">&times;</span>
                        </button>
                        <h3 className="mt-3">About {el.name}</h3>
                        <div
                          className="small p-3 p-md-2 modal-body"
                          dangerouslySetInnerHTML={{ __html: el.description }}
                        />
                      </div>
                    </div>
                  </div>
                </TeamProfile>
              ))}
            </div>
          </div>
        </div>
      </Layout>
    )}
  />
);

export default Team;
