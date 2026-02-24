import { ProgressProvider } from '@bprogress/next/app';
import ReactDOMServer from 'react-dom/server';

import WebsiteLoader from '@/components/molecules/WebsiteLoader';
import constants from '@/constants';

import type { Layout } from '@/@types/next.types';

const ProgressBar: Layout = (props) => {
  const { children } = props;

  const loader = ReactDOMServer.renderToString(<WebsiteLoader />);

  const template = `
    <div class="bar" role="bar">
      <div class="peg"></div>
    </div>
    ${loader}
  `;

  return (
    <ProgressProvider
      color="transparent"
      options={{ showSpinner: false, template }}
      stopDelay={constants.PROGRESS_BAR_DELAY}
    >
      {children}
    </ProgressProvider>
  );
};

export default ProgressBar;
