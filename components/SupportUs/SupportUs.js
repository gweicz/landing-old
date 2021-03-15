 import React from 'react';


function SupportUs() {
  return (
    <div className="section section-dao">
      <div className="dao-wrapper">
        <div className="left-panel"/>
        <div className="right-panel">
          <div className="support-title-wrapper">
            <h2 className="section-title">Podpořte nás</h2>

            <p className="supportus-text">
              Pokud se vám líbí vize, které naše komunita šíří či projekty které vytváříme,
              můžete se připojit a pomoci s realizací jednotlivých projektů, a nebo nás podpořit finančně.
            </p>
          </div>

          <div className="support-wrapper">
            <div className="support-text">
              <h4>AKTIVNÍ ÚČASTÍ</h4>
              <p>
                Pokud s námi sdílíte nadšení pro rozvoj Ethereum a DeFi ekosystému
                a jsou pro vás naše projekty užitečné, můžete se přimo&nbsp;
                <a href="https://forum.gwei.cz/t/gwei-cz-pomozte-nam-s-rozvojem-nasich-projektu/284" target="_blank">
                  podílet na jejich rozvoji
                </a>.
              </p>
              <p>
                Hledáme pomocníky napříč různými obory - můžete pomáhat nováčkům, překládat, psát články,
                tvořit videa, dělat grafiku či pomoci s vývojem smart-kontraktů a mnoho dalšího.
              </p>
              <p>
                DeFi je hlavně o komunitě, pojdťe s námi šířit vizi opravdu svobodných peněz dále!
              </p>
            </div>
            <div id="financial-support" className="support-text">
              <h4>FINANČNĚ</h4>
              <p>
                Peníze využijeme k financování naší komunity, případně přerozdělíme jednotlivým projektům.
                Podpořit nás můžete buď zasláním kryptoměn nebo v rámci&nbsp;
                <a href="https://gitcoin.co/grants/" target="_blank">Gitcoin grantů</a>.
              </p>
              <div className="financial-support-addresses">
                <div className="ethereum-addresses-wrapper">
                  <p className="ethereum-address">
                    <span style={{fontWeight: '500'}}>ETH Adresa (ENS):</span> <br/>
                    <span>gweicz.eth</span>
                  </p>
                  <p className="ethereum-address">
                    <span style={{fontWeight: '500'}}>ETH Adresa:</span> <br/>
                    <span style={{wordWrap: 'break-word'}}>0x4D07aF703C163540c59763fF404710204334AF81</span>
                  </p>
                </div>
                <div className="qr-code">
                  <img src="/assets/images/gwei-qrcode.png" alt="Gwei.cz Ethereum Wallet Address QR Code"/>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}

export default SupportUs;
