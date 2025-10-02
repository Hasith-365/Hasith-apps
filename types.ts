// FIX: Replaced JSX.Element with ReactElement and added the corresponding import
// to fix the "Cannot find namespace 'JSX'" error.
import type { ReactElement } from 'react';

export interface AppInfo {
  name: string;
  url: string;
  description: string;
  icon: ReactElement;
}
