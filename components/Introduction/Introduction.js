import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';

import GweiLogo from 'public/assets/icons/gwei-logo.svg';
import ForumIcon from 'public/assets/icons/forum.svg';
import DiscordIcon from 'public/assets/icons/discord.svg';

function Introduction() {
  return (
    <div className="section section-introduction">
      <div className="introduction-wrapper">

        <div className="left-panel">
          <div className="panel-logo">
            <GweiLogo />
          </div>
        </div>

        <div className="right-panel">
          <div className="heading">
            <h2>Česko-Slovenská</h2>
            <h1>Ethereum & De-Fi komunita</h1>
          </div>

          <p className="introduction-text">
            Jsme komunita nadšenců, kteří se snaží tyto dvě technologie přiblížit širší krypto komunitě,
            tvořit v rámci ní projekty a představit jí tak praktické využití kryptoměn,
            jako peněz v decentralizovaných aplikacích.
            <br/>
            <a href="https://forum.gwei.cz/t/vitejte-na-diskuznim-foru-gwei-cz/7" target="_blank"> Více informací o komunitě ></a>
          </p>
        </div>
      </div>

      <div className="social-buttons">
        <div className="social-button">
          <a href="https://forum.gwei.cz/">
            <ForumIcon />
            <h4>Fórum Gwei.cz</h4>
            <p>
              Na našem fóru řešíme projekty a DAO governance naší komunity.
            </p>
          </a>
        </div>

        <div className="social-button">
          <a href="https://discord.gg/FpxwbnM">
            <DiscordIcon />
            <h4>Discord Chat</h4>
            <p>
              Základním komunikačním kanálem, kde se děje všechno, je náš Discord.
            </p>
          </a>
        </div>

        <div className="social-button">
          <a href="https://twitter.com/gweicz">
            <FontAwesomeIcon icon={['fab', 'twitter']} style={{color: 'rgb(29,161,242)'}}/>
            <h4>Twitter</h4>
            <p>
              Sledujte nás na našem Twitteru, ať vám neunikne žádná novinka z Etherea.
            </p>
          </a>
        </div>
      </div>
    </div>
  )
}

export default Introduction;
