import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'EVMcrispr',
    img: '/img/evmcrispr.svg',
    background: 'black',
    link: 'https://evmcrispr.com',
    description: (
      <>
        EVMcrispr is a powerful tool that combines a domain-specific language with a Javascript library to interact with Aragon DAOs. With it, you can bundle many DAO operations into just one script, generating a singular transaction, usually a vote. These commands include installing or upgrading apps, changing their permissions, executing actions or interacting with external contracts.
      </>
    ),
  },
  {
    title: 'ENS Wayback Machine',
    img: '/img/wayback-machine.png',
    link: 'https://wayback-machine.ens.site/',
    description: (
      <>
        ENS Wayback Machine is a Web3 version of the Internet Archive's Wayback Machine that allows users to view historical versions of IPFS content associated with ENS domains. It is built using Ethereum Name Service (ENS) and InterPlanetary File System (IPFS) technologies.
      </>
    ),
  },
  {
    title: 'Osmotic Funding',
    img: '/img/osmotic-funding.png',
    link: 'https://showcase.ethglobal.com/ethonline2021/osmotic-funding',
    description: (
      <>
        Protocol built on top of Superfluid Finance and Conviction Voting to create and regulate project funding streams based on the interest a community has in them. Community preference is revealed continuously, since tokenholders are able to change their stake at any moment.
      </>
    ),
  },
  {
    title: 'Unbreakable Vows',
    img: '/img/unbreakable-vows.svg',
    background: 'black',
    link: 'https://forum.1hive.org/t/unbreakable-vows-private-contracts-arbitrated-by-celeste/5012/',
    description: (
      <>
        Unbreakable Vows are private contracts that can be created and signed by parties to give legitimacy to peer to peer agreements. In the Harry Potter universe, these vows are magical contracts that, if broken, result in the death of the violator. In the web3 world, breaking the vow leads to the loss of collateral such as tokens or NFTs.
      </>
    ),
  },
  {
    title: 'Lazuline',
    img: '/img/lazuline.png',
    link: 'https://forum.aragon.org/t/financial-proposal-demoing-a-tao-voting-dao/3622',
    description: (
      <>
        A light and fast Aragon Client, like a hummingbird. It takes the name from the lapis lazuli color, and the lazuline sabrewing hummingbird.
      </>
    ),
  },
  {
    title: 'Rosette Protocol',
    img: '/img/rosette.png',
    link: 'https://rosette.webflow.io/',
    description: (
      <>
        Rosette is a decentralized, disputable protocol built on Ethereum. It focuses on simplifying and facilitating end-users interactions by documenting and describing smart contracts' functions in a human-readable manner.
      </>
    ),
  },
];

function Feature({img, background, title, link, description}) {
  return (
    <div className={clsx('col col--4 feature')}>
      <div style={{marginBottom: "15px", backgroundColor: background, height: "200px", overflow: "hidden", display: "flex", flexDirection: "column", justifyContent: "center"}} className="text--center">
      <a target="_blank" href={link}><img style={{width: "100%"}} src={img} role="img" /></a>
      </div>
      <div className="text--center padding-horiz--md">
        <h3><a target="_blank" href={link}>{title}</a></h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
