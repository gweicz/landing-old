import Head from 'next/head';

const LayoutHead = () => {
  return (
    <Head>
      <meta
        name="description"
        content="Jsme komunita Ethereum/DeFi nadšenců, kteří se snaží tyto dvě technologie přiblížit širší krypto komunitě, tvořit v rámci ní projekty a představit jí tak praktické využití kryptoměn, jako peněz v decentralizovaných aplikacích, které běží na síti Ethereum."
      />

      <title>Gwei.cz | CZ/SK Ethereum/DeFi komunita</title>

      <link href="https://fonts.googleapis.com/css2?family=Rubik:wght@300;400;500;700&display=swap" rel="stylesheet" />
      <link rel="icon" href="/favicon.png" />
    </Head>
  )
}

export default LayoutHead;
