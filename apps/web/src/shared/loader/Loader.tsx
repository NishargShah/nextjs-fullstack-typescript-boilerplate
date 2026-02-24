import styles from '@/shared/loader/Loader.module.css';

import type { Component } from '@/@types/next.types';

const Loader: Component = () => (
  <div className={styles.container}>
    <div className={styles.loader} />
  </div>
);

export default Loader;
