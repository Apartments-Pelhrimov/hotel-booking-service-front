'use client';
import React from 'react';
import { FC } from 'react';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import { Box, FormControl, MenuItem, Select } from '@mui/material';

import * as styles from '../../dropdowns/dropdown/Dropdown.styles';
import {
  DropdownArrowSize,
  DropdownMenuItems,
  DropdownProps,
} from '../interfaces';

const Dropdown: FC<DropdownProps> = ({
  id,
  label,
  autoWidth = false,
  multiple = false,
  size,
  onChange = () => {},
  width,
  menuItems = [],
  ...rest
}) => {
  return (
    <>
      <Box>
        <Box sx={styles.mainLabel}>{label}</Box>
        <FormControl size={size} sx={{ width: width }}>
          <Select
            id={id}
            autoWidth={autoWidth}
            multiple={multiple}
            onChange={onChange}
            {...rest}
            sx={styles.inputField}
            IconComponent={props => (
              <ArrowDropDownIcon
                {...props}
                fontSize={DropdownArrowSize.LARGE}
              />
            )}
            MenuProps={{
              PaperProps: {
                sx: styles.menuPaper,
              },
            }}
          >
            <MenuItem value="" sx={styles.menuItem}>
              <em>none</em>
            </MenuItem>
            {menuItems?.map(({ value, shownValue }: DropdownMenuItems) => (
              <MenuItem key={value} sx={styles.menuItem} value={value}>
                {shownValue}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </Box>
    </>
  );
};
export default Dropdown;
