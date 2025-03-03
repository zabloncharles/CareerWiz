import React from 'react';
import { INavMenuItemProps } from './MenuItem.interface';

export const NavMenuItem = ({ caption, onClick, icon, popoverChildren }: INavMenuItemProps) => {
  return (
    <button
      onClick={onClick}
      className="flex items-center gap-2 px-4 py-2 text-white/80 hover:text-white transition-colors rounded-lg hover:bg-white/5"
    >
      {icon}
      <span className="text-sm font-medium">{caption}</span>
      {popoverChildren}
    </button>
  );
};
