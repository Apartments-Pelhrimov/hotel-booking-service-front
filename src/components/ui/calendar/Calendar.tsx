'use client';
import React, { useState } from 'react';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline';
import { ArrowDropUp } from '@mui/icons-material';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import { Box, Typography } from '@mui/material';
import { SxProps, Theme } from '@mui/material/styles';
import { DatePicker, LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';

import 'dayjs/locale/uk';

import * as styles from './Calendar.styles';

interface CalendarProps {
  label?: string;
  sx?: SxProps<Theme>;
}

const Calendar = ({ label, sx }: CalendarProps) => {
  const [open, setOpen] = useState(false);

  return (
    <Box sx={sx}>
      <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale="uk">
        <Box sx={styles.calendarWrapper}>
          <Typography variant="body2">{label}</Typography>
          <DatePicker
            views={['day']}
            sx={styles.datePicker}
            dayOfWeekFormatter={weekday => `${weekday.format('dd')}`}
            closeOnSelect={false}
            slots={{
              openPickerIcon: open ? ArrowDropUp : ArrowDropDownIcon,
              leftArrowIcon: ChevronLeftIcon,
              rightArrowIcon: ChevronRightIcon,
            }}
            slotProps={{
              popper: {
                sx: styles.calendarPopper,
              },
              calendarHeader: {
                format: 'MMMM',
                slots: {
                  leftArrowIcon: ChevronLeftIcon,
                  rightArrowIcon: ChevronRightIcon,
                },
              },
            }}
            showDaysOutsideCurrentMonth={true}
            format="L"
            onOpen={() => setOpen(true)}
            onClose={() => setOpen(false)}
          />
        </Box>
      </LocalizationProvider>
    </Box>
  );
};
export default Calendar;
