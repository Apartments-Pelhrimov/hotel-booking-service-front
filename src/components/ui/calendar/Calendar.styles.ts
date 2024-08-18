import { SxProps, Theme } from '@mui/material/styles';

export const datePicker: SxProps<Theme> = {
  '& .MuiInputBase-root': {
    width: '260px',
    height: '40px',
    borderRadius: '0px',
    backgroundColor: 'grey.800',
  },
  '& .MuiButtonBase-root': {
    ':hover': {
      backgroundColor: 'transparent',
    },
    '& .MuiTouchRipple-root': {
      display: 'none',
    },
  },
  '& .MuiSvgIcon-root': {
    fontSize: '35px',
  },
  '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
    border: 'none',
  },
  '& .MuiOutlinedInput-notchedOutline': {
    border: 'none',
  },
  '&:hover .MuiOutlinedInput-notchedOutline': {
    border: 'none',
  },
  '&:focus': {
    outline: 'none',
  },
};

export const calendarWrapper: SxProps<Theme> = {
  display: 'flex',
  flexDirection: 'column',
  gap: '5px',
};

export const calendarPopper: SxProps<Theme> = {
  '& .MuiPaper-root': {
    height: 'fit-content',
    marginTop: '5px',
    borderRadius: '0px',
    boxShadow: '0px 3px 7px 2px rgba(0,0,0,0.12)',
  },
  '& .MuiDateCalendar-root': {
    width: '260px',
    height: '310px',
  },
  '& .MuiPickersCalendarHeader-root': {
    padding: 0,
    marginTop: '10px',
    '& .MuiPickersCalendarHeader-labelContainer': {
      textTransform: 'capitalize',
      marginLeft: '15px',
      typography: 'body2',
      color: 'green.200',
    },
    '& .MuiIconButton-root': {
      width: '45px',
      height: '45px',
      color: 'green.500',
      ':hover': {
        backgroundColor: 'transparent',
      },
      '& .MuiTouchRipple-root': {
        display: 'none',
      },
    },
  },
  '& .MuiDayCalendar-root': {
    padding: '5px',
    paddingY: '0px',
    '& .MuiDayCalendar-weekDayLabel': {
      typography: 'body2',
      color: 'green.700',
      textTransform: 'capitalize',
    },
    '& .MuiPickersDay-root': {
      typography: 'body1',
      width: '32px',
      height: '32px',
      borderRadius: '0px',
      border: 'none',
      ':hover': {
        backgroundColor: 'green.300',
      },
      '& .MuiTouchRipple-root': {
        display: 'none',
      },
    },
    '& .MuiPickersDay-today': {
      backgroundColor: 'green.300',
    },
    '& .MuiDayCalendar-weekContainer': {
      ':hover': {
        backgroundColor: 'green.900',
      },
    },
    '& .Mui-selected': {
      backgroundColor: 'green.300',
    },
  },
};
