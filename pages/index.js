// Librairies
import Head from "next/head";

// Components
import Main from "@/components/Main";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";

// MAIN FUNCTION
export default function Home() {
  return (
    <main className='flex min-h-screen flex-col items-center justify-between'>
      <Head>
        {/* Charset & Language */}
        <meta charSet='UTF-8' />
        <meta httpEquiv='Content-Language' content='en' />
        <title>Blockchain & Star | Your web3 trusted partner</title>

        {/* Meta SEO */}
        <meta
          name='description'
          content='Blockchain & Star specializes in developing decentralized web3 applications, smart contract solutions, and blockchain consulting services.'
        />
        <meta
          name='keywords'
          content='Blockchain, Web3, DApps, Smart Contracts, B2B, Decentralized Applications, Blockchain Consulting'
        />
        <meta name='robots' content='index, follow' />
        <meta
          name='author'
          content='https://linkedin.com/in/adelamare-blockchain'
        />
        <meta
          name='viewport'
          content='width=device-width, initial-scale=1'
        />

        {/* Open Graph */}
        <meta
          property='og:title'
          content='Blockchain & Star | Your web3 trusted partner'
        />
        <meta
          property='og:description'
          content='We specialize in blockchain development, including decentralized Web3 solutions and consulting. Partner with Blockchain & Star for your next Web3 project.'
        />
        <meta
          property='og:image'
          content='https://blockchain-cie.com/fav.png'
        />
        <meta
          property='og:image:alt'
          content='Blockchain & Star - Your web3 trusted partner'
        />
        <meta
          property='og:url'
          content='https://blockchain-cie.com'
        />
        <meta property='og:type' content='website' />
        <meta property='og:site_name' content='Blockchain & Star' />
        <meta property='og:locale' content='en_US' />

        {/* Twitter */}
        <meta name='twitter:card' content='summary_large_image' />
        <meta
          name='twitter:title'
          content='Blockchain & Star | Your web3 trusted partner.'
        />
        <meta
          name='twitter:description'
          content='From smart contracts to decentralized applications, Blockchain & Star is your trusted Web3 partner.'
        />
        <meta
          name='twitter:image'
          content='https://blockchain-cie.com/fav.png'
        />
        <meta
          name='twitter:image:alt'
          content='Blockchain & Star - Your web3 trusted solutions'
        />
        <meta name='twitter:site' content='@blockchain_cie' />

        {/* Fav Icon */}
        <link
          rel='icon'
          href='https://blockchain-cie.com/fav.png'
          type='image/png'
        />

        {/* Canonical Link */}
        <link rel='canonical' href='https://blockchain-cie.com/' />

        {/* Schema.org Markup for Organization */}
        {/* <script
          type='application/ld+json'
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Website",
              name: "Blockchain & Star",
              description:
                "Blockchain & Star specializes in developing decentralized web3 applications, smart contract solutions, and blockchain consulting services.",
              url: "https://blockchain-cie.com/",
              logo: "https://blockchain-cie.com/fav.png",
              sameAs: [
                "https://www.linkedin.com/company/blockchain-cie/",
                "https://x.com/blockchain_cie",
              ],
              contactPoint: {
                "@type": "ContactPoint",
                contactType: "Customer Service",
                email: "",
                areaServed: "",
                availableLanguage: [],
              },
            }),
          }}
        /> */}
      </Head>
      <Main />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </main>
  );
}
