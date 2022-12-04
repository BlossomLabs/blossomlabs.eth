import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'EVMcrispr',
    img: '/img/evmcrispr.svg',
    background: 'black',
    description: (
      <>
        EVMcrispr is a powerful tool that combines a domain-specific language with a Javascript library to interact with Aragon DAOs. With it, you can bundle many DAO operations into just one script, generating a singular transaction, usually a vote. These commands include installing or upgrading apps, changing their permissions, executing actions or interacting with external contracts.
      </>
    ),
  },
  {
    title: 'Osmotic Funding',
    img: '/img/osmotic-funding.png',
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
    description: (
      <>
        Unbreakable Vows are private legal contracts that can be created and signed by parties to give legitimacy to peer to peer agreements. In the Harry Potter’s Wizarding World, an unbreakable vow is a type of binding magical contract cast between two parties, that if broken by either party, would result in the imminent death of whoever broke the contract. In the web3 world, the party who breaks the vow only loses some collateral (tokens, NFTs, etc).
      </>
    ),
  },
  {
    title: 'Blobscan Explorer',
    img: '/img/blobscan.png',
    description: (
      <>
        A forthcoming upgrade to Ethereum will allow the publishing of temporary blobs of data in the beacon chain. Blobscan is the first blockchain explorer that helps to navigate and visualize those blobs, providing the necessary infrastructure to scale Ethereum.
      </>
    ),
  },
  {
    title: 'Lazuline',
    img: '/img/lazuline.png',
    description: (
      <>
        A light and fast Aragon Client, like a hummingbird. It takes the name from the lapis lazuli color, and the lazuline sabrewing hummingbird.
      </>
    ),
  },
  {
    title: 'Wayback Machine',
    img: '/img/wayback-machine.png',
    description: (
      <>
        InterPlanetary Wayback Machine allows the user to go “back in time” and see how ENS linked dApps looked in the past. It also allows to donate in Filecoin to the preservation of those websites.
      </>
    ),
  },
];

function Feature({img, background, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div style={{marginBottom: "15px", backgroundColor: background, height: "200px", overflow: "hidden", display: "flex", flexDirection: "column", justifyContent: "center"}} className="text--center">
        <img style={{width: "100%"}} src={img} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
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
