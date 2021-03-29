import { library } from '@fortawesome/fontawesome-svg-core';
import { fab, faTwitter, faGithub } from '@fortawesome/free-brands-svg-icons';
import { faTimes, faAngleRight } from '@fortawesome/free-solid-svg-icons';

import 'styles/_default/globals.css';
import 'styles/Header.scss';
import 'styles/Introduction.scss';
import 'styles/Projects.scss';
import 'styles/SupportUs.scss';
import 'styles/Blog.scss';
import 'styles/Footer.scss';

library.add( fab, faTimes, faAngleRight, faTwitter, faGithub );

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}

export default MyApp
