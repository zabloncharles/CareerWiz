import { ReactNode } from 'react';

export interface INavMenuItemProps {
  caption: string;
  onClick?: () => void;
  icon?: ReactNode;
  popoverChildren?: ReactNode;
}
