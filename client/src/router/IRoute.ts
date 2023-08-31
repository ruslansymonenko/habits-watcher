import React from 'react';

export interface IRoute {
  path: string;
  element: React.LazyExoticComponent<React.FC>;
  private: boolean;
}
