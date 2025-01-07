'use client';

import React from 'react';

export interface ErrorProps {
  error: Error;
}

export default function Error({ error }: ErrorProps) {
  return <div>Unexpected error inside sales slot with {error.message}</div>;
}
