import Head from 'next/head';

const LayoutHead = () => {
  return (
    <Head>
      <meta
        name="description"
        content="Jsme komunita nadšenců, kteří se snaží šířit myšlenku svobodných peněz a představovat veřejnosti jejich praktické využití v rámci decentralizovaných aplikací."
      />

      <title>Gwei.cz | CZ/SK Ethereum/DeFi komunita</title>

      <link href="https://fonts.googleapis.com/css2?family=Rubik:wght@300;400;500;700&display=swap" rel="stylesheet" />
      <link rel="icon" href="/favicon.png" />
    </Head>
  )
}

export default LayoutHead;
