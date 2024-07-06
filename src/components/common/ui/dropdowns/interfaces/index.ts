import { ElementType, ReactNode } from 'react';
import { SelectChangeEvent } from '@mui/material';

export enum DropdownSize {
  SMALL = 'small',
  MEDIUM = 'medium',
}

export enum DropdownArrowSize {
  SMALL = 'small',
  MEDIUM = 'medium',
  LARGE = 'large',
}

export interface DropdownMenuItems {
  value: string | number;
  shownValue: string | number;
}

export interface DropdownProps {
  id?: string;
  label?: string;
  autoWidth?: boolean;
  size?: DropdownSize;
  width?: string;
  classes?: object;
  IconComponent?: ElementType;
  multiple?: boolean;
  onChange: (event: SelectChangeEvent<string>, child: ReactNode) => void;
  menuItems?: DropdownMenuItems[];
}
