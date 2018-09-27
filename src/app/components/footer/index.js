import React from 'react';
import config from '../../../config';

const year = new Date().getFullYear();

const Footer = () => (
  <section>
    <footer className="flex flex-around-center">
        { config.app.appName } &copy; { year }
    </footer>
  </section>
);

export default Footer;