import Providers from '@/app/providers';
import Header from '@/components/header/Header';
import AppClient from '@/components/templates/AppClient';

import type { Layout } from '@/@types/next.types';
import type { RootLayoutAppProps } from '@/@types/zustandState.types';

const App: Layout<RootLayoutAppProps> = ({ children, ...props }) => (
  <Providers {...props}>
    <AppClient />
    <main id="main">
      <Header />
      {children}
    </main>
  </Providers>
);

export default App;
