import { Button, Typography } from '@repo/ui/atoms';
import { useQueryErrorResetBoundary } from '@tanstack/react-query';

import type { Component, NextErrorType } from '@repo/types';

const Error: Component<NextErrorType> = ({ error, reset }) => {
  const { reset: queryReset } = useQueryErrorResetBoundary();

  const handleReset = () => {
    reset();
    queryReset();
  };

  return (
    <div className="flex flex-col items-center">
      <Typography as="h2" className="p-4" variant="content">
        It&apos;s not you. It&apos;s us. Give it another try, please!
      </Typography>
      <Typography as="p" variant="content">
        {error.message ?? ''}
      </Typography>
      <Button className="mt-4" onClick={handleReset} type="button" variant="primary">
        Try Again
      </Button>
    </div>
  );
};

export default Error;
