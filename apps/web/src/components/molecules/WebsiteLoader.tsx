import clsx from 'clsx';
import Image from 'next/image';

import logo from '@/assets/images/next.svg';

import type { Component } from '@/@types/next.types';

interface WebsiteLoaderType {
  isTransparent?: boolean;
}

const WebsiteLoader: Component<WebsiteLoaderType> = ({ isTransparent = true }) => (
  <div
    className={clsx(
      'bg-background fixed top-0 left-0 z-9999 flex h-dvh w-lvw items-center justify-center',
      {
        'bg-background/75': isTransparent,
      },
    )}
  >
    <Image alt="logo-img" className="size-24 object-contain dark:invert" src={logo} />
  </div>
);

export default WebsiteLoader;
