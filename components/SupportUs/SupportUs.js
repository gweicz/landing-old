import React from 'react';


function SupportUs() {
  return (
    <div className="section section-dao">
      <div className="dao-wrapper">
        <div className="left-panel"/>
        <div className="right-panel">
          <div className="support-title-wrapper">
            <h2 className="section-title">Podpořte Projekty</h2>

            <p className="supportus-text">
              Pokud se vám líbí projekty, které vznikají v rámci Gwei komunity,
              můžete se s námi na nich podílet, hned dvěma způsoby. A to buď
              aktivním zapojením nebo finančně.
            </p>
          </div>

          <div className="support-wrapper">
            <div className="support-text">
              <h4>PŘIPOJENÍM SE KE KOMUNITĚ</h4>
              <p>
                Pokud s námi sdílíte nadšení pro rozvoj Ethereum a De-Fi ekosystému
                a jsou pro vás naše projekty užitečné, můžete se přimo&nbsp;
                <a href="https://forum.gwei.cz/t/gwei-cz-pomozte-nam-s-rozvojem-nasich-projektu/284">podílet na jejich rozvoji</a>.
              </p>
            </div>
            <div id="financial-support" className="support-text">
              <h4>FINANČNĚ</h4>
              <p>
                Pomoct nám můžete i finančně. Peníze využijeme
                k financování projektů a konferencí. Podpořit
                nás můžete buď zasláním kryptoměn nebo v rámci&nbsp;
                <a href="https://gitcoin.co/grants/">Gitcoin grantů</a>.
              </p>
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
  )
}

export default SupportUs;
