import Meta from '@/components/Meta';
import React from 'react';

export default function Custom404() {
  return (
    <>
      <Meta title="404 - Not Found" />

      <div className="flex h-screen">
        <div className="m-auto text-center text-gray-900 dark:text-gray-200">
          <h1>404</h1>
          <p>Not Found</p>
        </div>
      </div>
    </>
  );
}
