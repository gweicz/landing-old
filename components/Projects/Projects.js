import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';

import BookIcon from 'public/assets/icons/book.svg';
import CryptoSceneIcon from 'public/assets/icons/community.svg';
import DczkIcon from 'public/assets/icons/dczk.svg';
import NewsIcon from 'public/assets/icons/infobook.svg';
import DeFiIcon from 'public/assets/icons/defi-toolkit.svg';

function Projects() {
  return (
    <div className="section section-projects">
      <div className="projects-wrapper">
        <div className="left-panel"/>
        <div className="right-panel">
          <h2 className="section-title">Komunitní Projekty</h2>
          
          <p className="projects-text">
            Vytváříme užitečné nástroje, sbíráme a překládáme důležité informace
            pro fanoušky prahnoucí po vzdělání o Ethereu a jeho ekosystému.
          </p>

          <div className="project-buttons">

            <div className="project-button">
              <a href="https://komunita.gwei.cz/projekty/etheroom">
                <CryptoSceneIcon />
                <div className="project-header-wrapper">
                  <div className="project-title-wrapper">
                    <h4>#ETHEROOM</h4>
                  </div>
                  <p>
                    Hlasová místnost s pravidelným programem, kde se scházíme a
                    diskutujeme Ethereum a DeFi.
                  </p>
                </div>
                <FontAwesomeIcon className="project-angle-right" icon="angle-right" />
              </a>
            </div>

            {/*<div className="project-button">
              <a href="https://komunita.gwei.cz/projekty/summit">
                <DeFiIcon />
                <div className="project-header-wrapper">
                  <div className="project-title-wrapper">
                    <h4>GWEI.CZ SUMMIT</h4>
                    <h6 className="project-status">PRVNÍ ROČNÍK 07/2021</h6>
                  </div>
                  <p>
                    Každoroční komunitní setkání, plné přednášek, workshopů a panelových diskuzí.
                  </p>
                </div>
                <FontAwesomeIcon className="project-angle-right" icon="angle-right" />
              </a>
            </div>*/}

            <div className="project-button">
              <a href="https://prirucka.gwei.cz/" target="_blank">
                <BookIcon id="guide-icon" />
                <div className="project-header-wrapper">
                  <div className="project-title-wrapper">
                    <h4>ETHEREUM/DEFI PŘÍRUČKA</h4>
                  </div>
                  <p>
                    Příručka pro nováčky, sloužící jako průvodce ekosystémem Etherea.
                  </p>
                </div>
                <FontAwesomeIcon className="project-angle-right" icon="angle-right" />
              </a>
            </div>

            <div className="project-button">
              <a href="https://hackmd.io/@gweicz/defi-toolkit" target="_blank">
                <DeFiIcon />
                <div className="project-header-wrapper">
                  <div className="project-title-wrapper">
                    <h4>DEFI TOOLKIT</h4>
                  </div>
                  <p>
                    Seznam nástrojů, pro každého uživatele decentralizovaných financí.
                  </p>
                </div>
                <FontAwesomeIcon className="project-angle-right" icon="angle-right" />
              </a>
            </div>

            <div className="project-button">
              <a href="https://czsk-scena.gwei.cz/" target="_blank">
                <CryptoSceneIcon />
                <div className="project-header-wrapper">
                  <div className="project-title-wrapper">
                    <h4>CZ/SK KRYPTOSCÉNA</h4>
                  </div>
                  <p>
                    Seznam krypto projektů, společností, lidí a komunit z České Republiky/Slovenska.
                  </p>
                </div>
                <FontAwesomeIcon className="project-angle-right" icon="angle-right" />
              </a>
            </div>

            <div className="project-button">
              <a href="https://bankless.cz" target="_blank">
                <NewsIcon />
                <div className="project-header-wrapper">
                  <div className="project-title-wrapper">
                    <h4>BANKLESS</h4>
                    <h6 className="project-status">VE VÝVOJI</h6>
                  </div>
                  <p>
                    Novinky se světa kryptoměn, s hlavním zaměřením na Ethereum/DeFi.
                  </p>
                </div>
                <FontAwesomeIcon className="project-angle-right" icon="angle-right" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Projects
