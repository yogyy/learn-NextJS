import React from 'react';

export default function Loading() {
  return (
    <div className="bg-gray-900">
      <div className="m-auto h-screen flex relative -top-12 items-center justify-center">
        <span className="loader"></span>
      </div>
    </div>
  );
}
