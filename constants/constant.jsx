// Librairies

// Components
import easydexImg from "@/public/assets/projects/EasyDex.png";
import cloudFundImg from "@/public/assets/projects/cloudfund.png";
import carShowcaseImg from "@/public/assets/projects/carshowcase.png";
import pimpMyBlogImg from "@/public/assets/projects/pimpmyblog.png";
import wishListImg from "@/public/assets/projects/WishListDApp.png";
import spaceDAOImg from "@/public/assets/projects/spacedao.png";

// MAIN FUNCTION
export const projectsData = [
  {
    title: "EasyDEX",
    backgroundImg: easydexImg,
    description:
      "This revolutionary DEX platform offers seamless token swapping and efficient liquidity management. It integrates real-time data using Chainlink Oracle for informed decision-making while ensuring enhanced security through cutting-edge blockchain technology. Designed for all users, it provides an intuitive and optimized experience across all devices. This DEX combines performance, reliability, and scalability to meet the needs of both individual traders and institutions. As a pioneer in decentralized exchanges, we're reinventing the cryptocurrency trading experience while guaranteeing transaction security and transparency.",
    projectUrl: "https://easydex.vercel.app",
    resume:
      "An advanced DEX platform offering seamless token swaps on the Sepolia Testnet blockchain with real-time market rates and historical swap tracking.",
    language: "JavaScript, Solidity",
    frontend: "React, TailwindCSS",
    style: "TailwindCSS",
    backend: "Hardhat | Node.js",
    blockchain: "Sepolia Eth (Testnet)",
  },
  {
    title: "SpaceDAO STM",
    backgroundImg: spaceDAOImg,
    description:
      "SpaceDAO STM is a cutting-edge decentralized application designed to revolutionize space traffic monitoring and management. The platform features a 3D visualization of satellite positions, real-time collision risk assessments, and consensus-based decision-making tools for space maneuvers. With an intuitive interface and seamless Web3 wallet integration, SpaceDAO ensures transparency and security in space situational awareness. This frontend implementation offers an immersive, data-rich user experience built on blockchain technology.",
    projectUrl: "https://spacedao.ai",
    resume:
      "A Web3-based space traffic management platform enabling real-time monitoring of satellite trajectories with blockchain-backed decision-making processes. Built using Vue.js, TypeScript, and Three.js for interactive 3D visualizations.",

    language: "TypeScript, Solidity",
    frontend: "Vue.js 3, Pinia, Globe.gl, Three.js, Chart.js",
    style: "TailwindCSS",
    backend: "Vite | Node.js",
    blockchain: "Arbitrum (Mainnet & Testnets)",
  },
  {
    title: "Crowdfunding dApp",
    backgroundImg: cloudFundImg,
    description:
      "This Polygon Amoy Crowdfunding Platform is a decentralized application (dApp) designed to simplify fundraising on the blockchain. Users can create, manage, and donate to crowdfunding campaigns with complete transparency and security. With just a 1% fee per donation, the platform ensures minimal costs for creators and donors. It offers cross-platform compatibility and a responsive, user-friendly interface for both desktop and mobile devices. Built on Polygon Amoy, the platform leverages advanced blockchain features for secure and scalable transactions.",
    projectUrl: "https://cloud-fund.vercel.app",
    resume:
      "A decentralized crowdfunding platform where users can create campaigns, donate, and track progress securely. Developed with React, Solidity, and Vite, deployed on the Polygon Amoy testnet.",
    language: "JavaScript | Solidity",
    frontend: "React.js",
    style: "TailwindCSS",
    backend: "Hardhat | Ethers.js | Node.js",
    blockchain: "Polygon AMOY Testnet",
  },
  {
    title: "WishList dApp",
    backgroundImg: wishListImg,
    description:
      "The WishList dApp is a decentralized platform designed to revolutionize gift management. Users can create and manage personal wish lists on the blockchain with secure, tamper-proof transactions. The application allows users to add items, view lists of friends and family, and make purchases securely. Built using advanced blockchain and Web3 technologies, WishList ensures transparency, security, and seamless cross-platform compatibility. The platform is highly scalable, offering an intuitive and responsive interface for both desktop and mobile users.",
    projectUrl: "https://dapp-wishlist.vercel.app",
    resume:
      "A blockchain-based dApp enabling users to create wish lists, add items, and purchase gifts securely. Built with Next.js, React, and Solidity, and deployed on the Polygon AMOY testnet.",
    language: "JavaScript, Solidity",
    frontend: "Next.js, React, TailwindCSS",
    style: "TailwindCSS",
    backend: "Hardhat | Ethers.js",
    blockchain: "Polygon AMOY Testnet",
  },
  {
    title: "Car showcase catalogue app",
    backgroundImg: carShowcaseImg,
    description: `Wrote in TypeScript and hosted on Vercel, this app was built to demonstrate knowledge working in NextJS version 14 and leveraging its server-side rendering capabilities,
    while accessing API endpoints. Users are able to filter car models from RapidAPI in order to show all characteristics of each car model for renting usecases.
    Another feature of this application is the powerful and dynamic routing through the Next version 14 package. Moreover, this application was designed with TailwindCSS and was built using the IMAGIN.studio API.`,
    projectUrl: "https://web2-car-showcase.vercel.app/",
    resume:
      "This Car Showcase website presents various car types, showcasing comprehensive information in a well-designed format with advanced filtering and pagination support for an enhanced user experience.",
    language: "TypeScript",
    frontend: "NextJS",
    style: "TailwindCSS",
    backend: "Node.js | RapidAPI | IMAGIN.studio API",
    blockchain: "none",
  },
  {
    title: "Blog application",
    backgroundImg: pimpMyBlogImg,
    description: `This app was built using React and is hosted on Firebase. An unregistered user will
    be able to view articles published on the blog. User
    authentication is available so you can signup and signin to your
    account with an email address in order to write, modify or delete articles. This dynamic data storage mechanism is made possible with Firebase.`,
    projectUrl: "https://pimp-my-blog.netlify.app/",
    resume:
      "A blog application built with React and Firebase, allowing users to view, create, edit, and delete articles. It features user authentication for signing up and signing in with an email address, and dynamic data storage powered by Firebase.",
    language: "JavaScript",
    frontend: "React",
    style: "CSS",
    backend: "Node.js | Firebase",
    blockchain: "none",
  },
];
