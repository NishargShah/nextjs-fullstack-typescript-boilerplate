import React from 'react';

import { useQueryErrorResetBoundary } from '@tanstack/react-query';

import styles from '@/components/defaults/error/Error.module.css';

import type { Component, NextErrorType } from '@/types';

const Error: Component<NextErrorType> = ({ error, reset }) => {
  const { reset: queryReset } = useQueryErrorResetBoundary();

  const handleReset = () => {
    reset();
    queryReset();
  };

  return (
    <div className={styles.errorContainer}>
      <h2>It’s not you. It’s us. Give it another try, please!</h2>
      <p>{error.message ?? ''}</p>
      <button onClick={handleReset} type="button">
        Try Again
      </button>
    </div>
  );
};

export default Error;
