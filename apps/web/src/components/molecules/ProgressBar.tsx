import { AppProgressBar } from 'next-nprogress-bar';
import ReactDOMServer from 'react-dom/server';

import WebsiteLoader from '@/components/molecules/WebsiteLoader';
import constants from '@/constants';

import type { Component } from '@/@types/next.types';

const ProgressBar: Component = () => {
  const loader = ReactDOMServer.renderToString(<WebsiteLoader />);

  const template = `
    <div class="bar" role="bar">
      <div class="peg"></div>
    </div>
    ${loader}
  `;

  return (
    <AppProgressBar
      options={{ showSpinner: false, template }}
      stopDelay={constants.PROGRESS_BAR_DELAY}
    />
  );
};

export default ProgressBar;
