import React from 'react';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './index-sub.css';
import shelogo from '../../images/others/she-gazette.webp';

var linkToSheGazette = 'https://shegazette.co/index.html'

function goTo(link) {
    window.location.assign(link);
}

export default function Subscribe() {
  return (
    <div class="sub">
      <h3 class="sub-title" data-testid="subtitle">
        Subscribe to the newsletter
      </h3>
      <div class="sub-container">
        <div class="sub-child-left">
        <div data-testid="subtext">
        We aim to accomplish more together by collaborating with <b
        href="https://shegazette.co/index.html" 
        class="sub-b" 
        data-testid="subb">SheGazette
        </b>!
        Please subscribe to their newsletter to get regular updates about opportunities via email.
        </div>
        <button
          class="sub-button"
          data-testid="subbuton"
          role="button" 
          type="button"
          onClick={(e) => {
            e.preventDefault();
            goTo(linkToSheGazette);
            }}>
          Subscribe
        </button>
        </div>
        <img
          class="sub-child-right"
          aria-label="img-name"
          src={shelogo}
          data-testid="subimg"
          onClick={(e) => {
            e.preventDefault();
            goTo(linkToSheGazette);
          }}
        />
      </div>
    </div>
  );
}
