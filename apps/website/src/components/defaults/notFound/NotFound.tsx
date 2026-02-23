'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

import styles from '@/components/defaults/notFound/NotFound.module.css';

import type { Component } from '@/@types/next.types';

const NotFound: Component = () => {
  const pathname = usePathname();

  return (
    <div className={styles.notFound}>
      <h2>Not Found</h2>
      <p>Could not find requested resource &quot;{pathname}&quot;</p>
      <Link href="/">
        <button type="button">Return Home</button>
      </Link>
    </div>
  );
};

export default NotFound;
