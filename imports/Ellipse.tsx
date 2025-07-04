import React from 'react';

export default function Ellipse() {
  return (
    <div className="w-full h-full">
      <svg
        className="w-full h-full"
        viewBox="0 0 64 64"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle
          cx="32"
          cy="32"
          r="31"
          stroke="currentColor"
          strokeWidth="2"
          className="text-primary opacity-20"
        />
      </svg>
    </div>
  );
}