import type { Component } from '@/@types/next.types';

const Loader: Component = () => (
  <div className="absolute top-0 left-0 flex size-full items-center justify-center">
    <div className="animate-loader loader size-12 rounded-full" />
  </div>
);

export default Loader;
