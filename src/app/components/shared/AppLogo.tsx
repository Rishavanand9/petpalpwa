'use client';

import Image from 'next/image';
import React from 'react';

type AppLogoProps = {
  width?: number;
  height?: number;
};

export default function AppLogo({ width = 100, height = 100 }: AppLogoProps) {
  return (
    <Image
      src="/appLogo.svg"
      alt="App Logo"
      width={width}
      height={height}
      priority
    />
  );
}
