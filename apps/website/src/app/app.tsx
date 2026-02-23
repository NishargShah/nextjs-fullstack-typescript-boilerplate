import Providers from '@/app/providers';
import AppClient from '@/components/AppClient';
import Header from '@/components/header/Header';

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
