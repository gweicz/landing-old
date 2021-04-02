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
            <h1>Ethereum & DeFi komunita</h1>
          </div>

          <p className="introduction-text">
            Jsme komunita nadšenců, kteří se snaží šířit myšlenku svobodných peněz a představovat veřejnosti jejich praktické využití v rámci decentralizovaných aplikací.
            <br/>
            <a href="https://komunita.gwei.cz/" target="_blank"> Více informací o komunitě ></a>
          </p>
        </div>
      </div>

      <div className="social-buttons">
        <div className="social-button">
          <a href="https://forum.gwei.cz/" target="_blank">
            <ForumIcon />
            <h4>Fórum Gwei.cz</h4>
            <p>
              Základní komunikační nástroj, zde řešíme to nejpodstatnější.
            </p>
          </a>
        </div>

        <div className="social-button">
          <a href="https://chat.gwei.cz" target="_blank">
            <DiscordIcon />
            <h4>Discord Chat</h4>
            <p>
              Prostor pro rychlou debatu, diskuze aktuálního dění v reálném čase.
            </p>
          </a>
        </div>

        <div className="social-button">
          <a href="https://twitter.com/gweicz" target="_blank">
            <FontAwesomeIcon icon={['fab', 'twitter']} style={{color: 'rgb(29,161,242)'}}/>
            <h4>Twitter</h4>
            <p>
              Sledujte nás na našem Twitteru, ať vám neunikne žádná novinka z Etherea.
            </p>
          </a>
        </div>
      </div>

      <div className="social-buttons" style={{ marginTop: '-1rem' }}>
        <div className="social-button social-button-github">
          <a href="https://github.com/gweicz" target="_blank">
            <FontAwesomeIcon icon={['fab', 'github']} style={{color: 'rgb(255,255,255)'}}/>
            <div className="button-github-text">
              <h4>GitHub</h4>
              <p>
                Všechny projekty, na kterých pracujeme, jsou open-source a najdete je na našem GitHubu.
              </p>
            </div>
          </a>
        </div>
      </div>
    </div>
  )
}

export default Introduction;
