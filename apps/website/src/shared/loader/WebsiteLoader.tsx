import React from 'react';

import clsx from 'clsx';
import Image from 'next/image';

import logo from '@/assets/images/next.svg';

import type { Component } from '@/types';

interface WebsiteLoaderType {
  isTransparent?: boolean;
}

const WebsiteLoader: Component<WebsiteLoaderType> = ({ isTransparent = true }) => (
  <div
    className={clsx('website-loader', {
      'website-loader-transparent': isTransparent,
    })}
  >
    <Image alt="logo-img" src={logo} />
  </div>
);

export default WebsiteLoader;
