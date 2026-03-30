import Providers from '@/app/providers';
import Navbar from '@/components/organisms/Navbar';
import AppClient from '@/components/templates/AppClient';

import type { Layout } from '@repo/types';

import type { RootLayoutAppProps } from '@/@types/zustandState.types';

const App: Layout<RootLayoutAppProps> = ({ children, ...props }) => (
  <Providers {...props}>
    <AppClient />
    <main id="main">
      <Navbar />
      {children}
    </main>
  </Providers>
);

export default App;
